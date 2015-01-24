package com.marklogic.samplestack.web.security;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.web.util.matcher.RegexRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;

import com.marklogic.samplestack.exception.SamplestackSecurityException;

// here's how you have to hack in crsf protection for just some urls
// https://github.com/spring-projects/spring-boot/issues/179
public class CsrfRequestMatcher implements RequestMatcher {
	private RegexRequestMatcher apiMatcher = new RegexRequestMatcher(
			"/v1/(search|tags).*", null);
	private RegexRequestMatcher allRESTMatcher = new RegexRequestMatcher(
			"/v1/.*", null);
	private RegexRequestMatcher sessionMatcher = new RegexRequestMatcher(
			"/v1/session.*", null);
	

	@Override
	public boolean matches(HttpServletRequest request) {
		// allow CORS preflight
		if (request.getMethod().equals("OPTIONS")) {
			return false;
		}
		// if no session in play, allow GETs and POST for anon search
		else if (request.getSession(false) == null) {
			if (request.getMethod().equals("GET")) {
				return false;
			} else if (request.getMethod().equals("POST") && apiMatcher.matches(request)) {
				return false;
				// short circuit POST /v1/session to avoid csrf creating a session.
			} else if (request.getMethod().equals("POST") && sessionMatcher.matches(request)) {
				throw new SamplestackSecurityException("Login endpoint requires CSRF token and session");	
			} else {
				return true;
			}
		// we but otherwise protect all REST API calls
		} else {
			// escape hatch -- make a new session if you request /v1/session.
			// don't require CSRF
			if (request.getMethod().equals("GET") && sessionMatcher.matches(request) && request.getHeader("X-CSRF-TOKEN") == null) {
				return false;
			}
			if (allRESTMatcher.matches(request)) {
				return true;
			}
			else {
				return false;
			}
		}
	}
}
