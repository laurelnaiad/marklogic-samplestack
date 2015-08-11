@login
Feature: Login

  The application allows both authenticated and unauthenticated access through
  login and logout operations. Authenticated users have access to more content
  and features.

  Scenario: Try to log in, fail, then succeed
    Given I am a visitor
    When I start to log in
    And I attempt to log in with invalid credentials
    And my login attempt is denied
    And I stop logging in
    And I attempt to log in as a Contributor
    Then I am logged in

  Scenario: Log In then Log Out
    Given I am a contributor
    And I am logged in
    When I log out
    Then I am not logged in

  Scenario: Log In as Mary
    Given I am "Mary"
    Then my user name is "MaryAdmin"
