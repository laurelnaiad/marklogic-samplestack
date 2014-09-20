### Errors, Exceptions, Diagnostics

**Because this is a sample application and because people are likely to break things as they play with it:

- the application should handle runtime errors by providing feedback to the end user (who is likely to in fact be the developer)
- the application should **not** attempt to post any diagnostics back to the server for analysis.

### Schemas

JSON Schemas are used to represent model elements. They are self-documenting expressions of expectations for JSON objects.

### Configuration (N/A)

There is no end-user configuration.

### Security

The application runs in a browser and is thus inherently relatively insecure.

Where credentials are entered, they should remain in the application state only as long as it takes to either confirm them through the login process or for the user to cancel a login attempt.

The application should be capable of running over an HTTPS connection(s), regardless of whether or not the REST server and the Web server are configured to be one-and-the-same.

### Limitations (N/A)

Not applicable for end users -- the application features are intended to be fully realized.

### Risks and Dependencies (N/A)

Not applicable for end users.

### Scalability (N/A)

Not applicable for end users.

### Performance

We will keep data passed between server and browser to a minimum through paging of long search results. Users should generally experience sub-second response times for any operation, subject to reasonable machine speed and local deployment scenario.

By minifying code and structuring the referencing of dependencies, we should strive for the application to load itself "quickly," though precise expectations may become better available as we build out the deployment of an optimized build.

### Upgrade (N/A)

Not applicable for end users.

### Feature Interaction

Not applicable for end users.

### Testing

Not applicable for end users.

### Documentation

The application is intended to be straightforward enough that it does not require its own "online help" or instructions.

One aspect for which we will provide assistance is in "Search Tips", which will help users with syntax and search parameters that they can use within text search criteria.
