## Footprint

We will seek to minimize dependencies so that the browser app is not overly "fat".

There are a few areas where this can become an issue:

- we must deliver the ability to render the app with minified code and with dependencies loaded from a CDN;
- we must avoid bloat, in particular with CSS.

*Note: one of the reasons to consider moving away from Twitter Bootstrap is the size of resulting CSS files.*
