### Errors, Exceptions, Diagnostics (N/A)

The primary source of errors for the developer is expected to be those that are reported due to syntax or other programmer errors, and reasonable messages should appear in the console when these are found.

Likewise, if the programming environment suffers its own error, the automation code should attempt to recover and log a meaningful error to the console.

### Schemas (N/A)

Aside from the object models of the configuration files that control the development environment, there are no developer-facing schemas.

### Configuration

Configurable elements of the development environment may be seen as part of the high-level functions of the developer experience. As we support public developers who find the need to reconfigure aspects of the development environment, we will develop and include configuration instructions in the documentation.

### Security (N/A)

There are no security requirements associated with Developer stakeholders.

### Limitations

The development environment is meant first and foremost to enable developers to experiment with the application code for Samplestack. It may also serve as sample code for developers wanting to automate their own applications, but this is not its primary purpose.

As such, the most signicant limitation is that the development environment automation code is that it has not been packaged as a reusable library.

While efforts have been made to author this code in a manner that allows it to function for an arbitrary application, where such application follows the directory structre of Samplestack, the code will not be as thoroughly documented.

Additionally, there is not automated testing planned to verify the functionality of the automation code specifically/directly. As such, while the execution of tests *using* the automation code may provide some level of confidence that it is functioning as expect, it will not undergo any formal testing.

### Risks and Dependencies

#### Complexity and Developer Familiarity

In general, it is reasonable for us to be concerned that some of our developer audience who have *some* but not *deep* experience with JavaScript application development -- and in particular may not have MVC application development experience -- may have a relatively steep learning curve as they discover the architecture of such application.

It is not, however, a goal to teach development of app development automation scripts.

So, while Gulp may be a new technology for them, we know that:

- there is not an overwhelming amoung of code to study; and
- they can still achieve the primary object of understanding the 3-tiered architecture and how browser applications fit into that architecture without concerning themselves with the environment automation code.

#### Environmental Configuration

The primary risks of this part of the application are the dependencies themselves.

Node software development, and Gulp programming in particular, combines many small libraries with very specific, targeted features. While this model -- the antithesis of monlithic architecture -- can and has proven to be very productive for the JavaScript developer, it also means that there are many moving parts.

One way to miminze the risk of having many dependencies is to be careful about the versions that are referenced by our code. For our Node dependencies, this will mean that we "shrinkwrap" the dependencies so that the npm system does not engage in its default behavior of matching and resolving interdependencies each time any developer installs them. Rather, prior to release versions being commit to the `master` branch, we will resolve all dependencies locally, storing the "shrinkwrapped" list in the repository so that when the repository is cloned, the precise versions of our dependencies to fetch will be defined, and npm will not "improvise" a combination of dependencies that appear from the their version numbers to be compatible.

### Scalability

The Samplestack developer experience is intended to support both one-off proofs-of-concept and large scale development of complex apps. The tradeoffs associated this goal are discussed [elsewhere]().

### Performance

The Gulp streaming build system is specifically designed with performance as a major goal and is known to scale very well.

There have been some issues with `Gaze`....

### Upgrade

Installing a new version of the Samplestack Browser project is intended to be straightforward.  The happy path for a developer is:

```bash
git pull
npm install
bower install
```

### Feature Interaction

The developer experience for the Samplestack Browser application does not have any direct interaction with any other MarkLogic features.

We *may* integrate the Browser development experience with the (two) Middle-tier development experiences. The interaction of browser and middle-tier development automation experiences has not yet been specified, but is anticipated to be self-contained to the Samplestack repository and is not anticipated to require direct feature interaction with other MarkLogic software.

One area where existing Feature Interaction is specified is in End To End tests. Specifically, end-to-end tests are intended to test the complete Samplestack solution. This means that features which face the End User are tested from the browser presentation layer down through and including Middle Tiers and the MarkLogic Server.

This requires the End-To-End tests to "drive" the portions of the automation code that is delivered in the middle-tiers in order to launch them, and it requires the tests also to manage the database content upon which the tests are based and to derive expectations from the seed-data used.

### Testing (N/A)

As noted above, the developer automation code itself will not be independently tested.

### Documentation

Significant portions of this specification, as well as additional introductory material, will be published as part of the online documentation available to all developers.

Details of how/where the online documentation will be made available are to be decided.
