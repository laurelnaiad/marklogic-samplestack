## Configurability

In larger teams, different developers may have different development machine environments. This sub-section on configurability is presented first among its peer sub-sections because many of those other subjects are related to the (re)configurability the application for diverse development and production environments.

Specific configuration parameters are documented in the [section 4.1.5](#SamplestackBrowser--FunctionalSpecification-4.1.5ConfigurableProperties).

### Network Ports and Web Servers Configurability

At a repository level, known areas where conflicts may occur should be designed as configurable. In a networked application, network ports are one such area, and so the application should be developed so as to allow for (re)configuration of the network ports used.

In order to promote developer ease of use, and specifically to support testing and dynamically rebuilding the browser application, the browser environment needs to be configurable to use web servers that are controlled by the browser development automation system. As such, when a developer is working on the browser code, the app should be served by web servers that are constructed and maintained by that automation code.

In production, or in cases where a middle-tier developer may wish to have a statically served web application, such a configuration does not provide value, and in fact the installation of the browser automation code may be more trouble than it is worth. As such, a developer should be able to run the application in a local environment where the app is served by the middle-tier HTTP server itself, for simplicity's sake.  

The MVC browser application should be developed so that it can be served from a completely static web server, so that it may be easily deployed to a "dumb" static server such as a simple nginx or Apache installation, or from any other server, such as a Spring web server, where in none of those cases does the server require knowledge of how the application is constructed, nor does the server software collaborate with the browser application code.

In summary:

* The browser application itself must be fully functional from any static web server served from any address.
* The browser application must allow for configurable REST server addresses.
* The browser development environment must run its own web servers to support testing and "live" coding.

### Feature Configurability

In some cases, we will make particular features or or code paths configurable where such configurations are known points at which an application deployment or a developer environment may want or require divergence. These cases will be noted individually in [section TODO]().
