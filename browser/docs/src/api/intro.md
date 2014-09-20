# Introduction

In order to promote the objective of providing developers with a base from which they can develop their own apps, the application is divided into two Angular.js modules.

Code that is very much specific to Samplestack is in the `app` module, while code that may be useful in other contexts is in a module named (for now*) `_marklogic`.  The `_marklogic` module is constructed with very few dependencies, while the `app` module has quite a few, in order to present the user interface as specified.

Following are the "ngdocs" that are written into the source code. "ngdocs" are like jsdocs, except they are customized for documenting Angular code, which has specialized APIs that do not lend themselves to being expressed cleanly by "plain" jsdocs.

For developers who are investigating the source code itself, actual jsdocs of functions that are internal to Angular modules are present in the source code. They are not, however, rendered here -- only the APIs of the components are present in this specification.

*SCS: Note: there are some drawbacks to the template here for the purposes of rendering these API docs, so the heading levels are a little bit off and as of right now the links within the API docs won't work. I have submitted a request for a Confluence "Numbered Headings" macro to be installed which would help solve the latter issue. The former would only really be solved by bringing the
