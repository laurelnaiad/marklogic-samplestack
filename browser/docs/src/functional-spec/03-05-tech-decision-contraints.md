## Technology Decisions as Constraints

We are forced to enter down certain paths with selection of technologies when building a complete example application -- even though our intent is to serve all comers, some of whom might not make the same choices.

As such, they form a type of constraint on how we can achieve a pure demonstration of three-tier MarkLogic application development.

MVC web applications are almost universally built "on the shoulders" of open source libraries. A number of major players in the industry have either intentionally or as a side effect of their development efforts, developed such libraries and released them into open source repositories, including but not limited to Google (Angular.js) and Facebook (React).  Other frameworks, such as Ember.js, do not have such strong corporate backing but are nonetheless funded, led or contributed to by significant corporate users of such technology.

In addition, a vast array of smaller libraries are available for more specific application development needs, and it is typical to employ those which fit a particular architecture or technology need within the scope of developing an application.

The subsections that follow introduce the more significant choices we have made in designing Samplestack.

### Build Environment: Node.js and gulp

The open source community has developed various technologies that aid in development which can operate independently of IDEs and text editors.  In part, this independence may be driven by the desire to provide automation within open source code repositories themselves, so that no assumptions are made about one's development environment, thereby allowing anyone who works with the code to benefit from the automation.

MVC browser applications are very heavily JavaScript-centric.  HTML and CSS are still important pieces, but more and more, these technologies themselves are driven by JavaScript, both during development and at run-time.

In fact, such applications are almost always developed with automation that is itself written in JavaScript and executed by Node.js. This takes the form of very specific libraries that execute key functions in handling source code, as well as task and build runner frameworks that are used to exercise these libraries to form a cohesive and developer-friendly development environment.

In general, these technologies are evolving very quickly in the open.

The Samplestack JavaScript development environment is centered around a relatively new framework called [gulp](http://gulpjs.com/), self-described as "the streaming build sytem".  It is so called because, contrary to earlier task runners such a [grunt](http://gruntjs.com/), gulp focuses on taking raw source code inputs and streaming them through various filters/plugins in order to render them into different states, such as a rendering that is specifically targeted for unit testing, or for production deployment. Such a stream-based approach yields much faster execution cycles, so that the turnaround time between a developer changing code and being able to evaluate the results is minimized and the experience becomes more fluid.  Open- and closed- source JavaScript projects such as [Angular.js]() are using or converting to gulp-based automation, as are many of the individuals who are leaders in the open-source JavaScript community.  See [this thread on the gulp repository](https://github.com/gulpjs/gulp/issues/540).

A number of small libraries are used in Samplestack's gulp automation code. These are introdcued \[TODO here\].  See also the section on Abstraction and Extensibility for discussion of potential for future officially supported abstractions of aspects of this process.

### MVC Framework: Angular.js

The most significant technology choice we have made in this regard is the selection of Angular.js as an MVC framework. Angular has, by most measures, the largest base of the current breed of MVC frameworks, is under acctive development by Google and other contributors, and is considered by many as a safe, reliable, flexible and extensible choice among the options.

By employing *any* reusable library, we enter into territory where other viable options are left "on the table." Not all of our customers will (or do) prefer or use Angular.js. Our belief is that, for the short run, Angular.js is in the sweet spot for our base, and our hope is that in the long run we will be able to adapt, both as the landscape changes, and as time and money allow, to be able to broaden our support for alternatives. This will be discussed in more detail under the [TODO -- abstraction/extensibility].

### Dependency Management

For better or worse, developing MVC browser apps tends to involve the use of many external libraries, both those used in the application itself and those used to build it.

There are several aspects to dependency management. The one which is worthy of discussing as a constraint is in the run-time linking of intra-application dependencies.

Today, larger applications are typically developed such that the global namespace is not occupied by each object, and there are techniques and tools used to allow for development of smaller files while also allowing for the build process to assemble those files into larger units for production deployment. This is the strategy employed in Samplestack via Require.js.

ECMAScript 6 is nearly here. It will provide language-level facilities for consistently accomplishing that which today is typically achieved through third party libraries. We anticipate moving to ES6 at some point after the 1.0 release of Samplestack, at which time the complexities of this type of dependency management will be reduced and the various implementation choices required to work around this language limitation will be unnecessary.

Details of this, and other aspects of dependency management that don't rise to the level of constraints and will be discussed below.

### Style: SASS, Twitter Bootstrap and node-sass

Cascading Stylesheets are the universally accepted technology with which to control the layout and style of web pages, as they allow for declarative abstractions of style instructions, resulting in more compact, legible and flexible HTML.

Most developers and designers have come to find that authoring Cascading Stylesheet directly poses unnecessary challenges where the alternative is to use a preprocessor which allows for a greater degree of abstraction, reuse and control over the styles.

Using a preprocessor involves writing style instructions in the language of the preprocessor, and employing the preprocessor, either at build-time or at run-time, to convert the instructions into plain CSS for the browser.

In a statically server app, preprocessing always takes place at build time and thus by definition requires some degree of development environment automation.

Options for preprocessors include SASS, LESS and Stylus.

For Samplestack, we selected SASS as our preprocessor language (specifically its SCSS syntax) and the node-sass library as the preprocessor itself.

Details on our implementation may be found below.
