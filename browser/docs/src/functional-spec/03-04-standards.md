## Standards

In browser applications, certain standards are set by W3C recommendations and following is a requirement for browser-based functionality (HTTP, DOM).

After that, there are additional standards and conventions that are typical and helpful.

MVC apps almost universally using a model where the application *code itself* is served statically. This has positive effect on scalability as serving a static webapp is a very lightweight operation for a web server, especially if CDNs and/or caching are in use.

All *data* for an MVC app is almost universally accessed using the AJAX with applicaiton/json Content-Types, and typically follow the RESTful pattern to reasonable degrees.  Browser code tends to be "happiest" with fully RESTful endpoints where resources (where verbs are in the HTTP method and resources are tracked by their id). Due to some current areas of non-RESTfulness in the available middle tier, some implementation work is required to adapt RESTful expectations in the browser app to the endpoints provided.

On the browser, W3C recommendations should always be followed. As some browsers, notably Internet Explorer prior to version 10, do not self-update to maintain compatibility with or implementation of the full set of current standards in the areas of DOM, CSS and ECMAScript, we cannot assume that all features are available to Samplestack.

At this time, as we are targeting IE9 as the minimum browser, it becomes the measure by which we can determine whether or not a feature will be available to us. Through unit- and end-to-end-testing, we can ensure that our application behaves as expected on the targeted browsers. Adherence to the limitations of Internet Explorer 9 is a significant drag on Samplestack development, as it is for all developers, and we anticipate retiring support for it as soon as is seen feasible. IE9 was chosen as the baseline because it is the baseline we test for in our other products -- this eases our testing burden until we have a lower-cost means of testing on a broader set of browsers and OSes.
