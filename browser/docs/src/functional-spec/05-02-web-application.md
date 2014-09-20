## Web Application

### Operation

#### Link To API Reference

The API Reference for the browser app is intended to be published here. While formatting issues are being addressed, it is currently in a separate wiki page: [Samplestack Browser API Reference](https://wiki.marklogic.com/display/rootwiki/Samplestack+Browser+API+Reference)

#### RequireJS Dependencies

While Angular applications use dependency injection to enable components to collaborate, RequireJS is used to structure the overall file dependencies that allow the components to be added to modules and for the applications external library dependencies to be loaded.

<div style="width: 100%">
<img style="display: block"  src="http://raw.githubusercontent.com/stu-salsbury/marklogic-samplestack/SPEC/browser/docs/diagrams/rjs-high-level.png"></img>
</div>

The two major **Angular** modules are organized into **RequireJS** modules as _marklogic/marklogic and application. Each is composed of a RequireJS module that is used to collect components ("app/compoments" and "_marklogic/components"). A separate build for testing is layered over the top as "mockedApp".

The two main modules each has a set of dependencies:

<div style="width: 100%">
<img style="display: block"  src="http://raw.githubusercontent.com/stu-salsbury/marklogic-samplestack/SPEC/browser/docs/diagrams/rjs-dependencies.png"></img>
</div>

### Internationalization

I18N is not in scope for 1.0.0 of Samplestack. AngularJS easily supports
authoring multi-language applications, so translation of the application
itself is probably a significant portion of the cost for I18N support.

### Implementation Phases and Timeline

As of mid Milestone 3 phase, the browser application infrastructure is largely
in place to support the features of the application.

For EA3:

- complete features
- <span style="color: red">skinning to professional UI graphic design?</span> -- working to identify a designer, timing TBD

For 1.0.0:

- expand test coverage
- open issues
- documentation finalization
- pre-release activities
