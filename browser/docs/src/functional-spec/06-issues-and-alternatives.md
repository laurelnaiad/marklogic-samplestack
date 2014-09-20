# Issues and Alternatives

Issues and Alternatives that are actively being worked and/or are intended to be resolved prior to 1.0 release are documented in github. Following are issues that may be considered in future releases, but are **off the table for 1.0**.

## Design Alternatives and Rationales

### Dependency Management

RequireJS is a proven means to handle dependencies in browser applications.

In fact, it is the basis for current browsers to support ES6-style dependency
management, as the major preprocessors which translate ES6 code to ES5 code
translate the ES6 dependency syntax to RequireJS syntax.

Even though RequireJS syntax is completely different than CommonJS syntax, other than that they both use the word 'require', for version 1.0 we will stay with RequireJS since it is best "not ECMAScript 6" means of handling file dependencies.

As our underlying libraries shift to ES6 and to the extent that our other tiers also may shift, we expect to do so in the Browser App, as well.

### Bootstrap

Bootstrap is bloated and long in the tooth. It is not well-designed for
customization. Newer frameworks, built from the ground up for customization,
such as Bourbon, offer some advantages. We should consider swapping out
Bootstrap for something like Bourbon.

### JSON Schema

Is JSON Schema a good direction? There are alternatives or enhancements
available, including validate.js, which may offer advantages to clarity
or features availalbe for validating model elements

### Learning Curve/Complexity

We are trying to strike a balance between showing professional quality, scalable architecture and development environment, and offering code that can work in other scenarios with simplicity.  And for many developers there are multiple new technologies involved. We shall see whether we are in the right ballpark with various tradeoffs and must be prepared to adjust accordingly.

## Possible Future Enhancements

### Angular 2.0

This is presently not an option, but as Angular 2.0 becomes reality, it will
offer significant improvements and will certainly be something to consider
beginning to adopt when it reaches a stable beta state.

### Features

There are numerous features that we've discussed adding to Samplestack in
the future. Once version 1.0.0 is released, we should start to digest feedback
and consider the future. For now, implementing our 1.0 feature set to the best
of our ability is the priority.

#### Potential Features

*These features have either been discussed or seem to have been referenced in the narrative. We should ensure that they aren't needed, because they are not currently specified.*

- Edit Question
- Edit Answer
- Edit Comment
- Vote Comment
- Filter by Age of question (date asked/created)
- Only show results for where there are no answers or no accepted answer
- Search only within question or only within answers
- Search by subject matter, e.g. for "XML-based languages" would include all tags for languages that fall into this category like XSLT, XPath, XQuery"
