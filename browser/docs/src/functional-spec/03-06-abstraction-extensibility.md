## Abstraction and Extensibility

An application with relatively simple business requirements such as Samplestack could theoretically be developed with minimal employment of abstractions and allowances for extensibility.

There are a few of reasons why this approach is not taken.

First, even internally, much of the functionality of Samplestack follows certain patterns, such as HTTP method calls and associated preparation thereof and reactions following the calls in the browser code, handling authentication issues, etc. In order to eliminate duplication and potential error, it's best to consolidate such similarities into abstractions.

The Angular.js programming model also allows the developer to write very *testable* code. It is much easier to create an abstract component and test it thoroughly in one place than it is to test several similar code paths in different parts of the application.

Finally, as one of our primary objectives is to demonstrate how real-world, large scale applications may be developed in this architecture, and to provide an example that could be scaled to such levels, we provide abstractions and make some affordances for extensibility within the Samplestack codebase.

### Abstraction in Practice

The application is divided between code that is relatively abstract, in an Angular module named "\_marklogic", and code that is Samplestack-specific, in a module named "app". As such, one may review examples of this division by examining the dependencies of each component (i.e. an application specific component may depend on one or more abstract ones).

Two examples of abstraction are:

- the _marklogic/service/data/mlModelBase component that underlies domain model objects and
- the _marklogic/domain/mlSearch module and the app/domain/ssSearch module
