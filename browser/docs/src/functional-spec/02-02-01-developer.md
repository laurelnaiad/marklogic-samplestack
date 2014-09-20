### For Developers

From the [Reference Architecture Product Requirements](https://wiki.marklogic.com/display/rootwiki/MarkLogic+8+Reference+Architecture):

> * **Three-tiered, thick client:** In a single-page application (SPA) the front-end is responsible for all view rendering and application state. The UI communicates with the middle tier only through JSON services. These services should represent that domain of the application, and not (necessarily) thin wrappers on document CRUD. A user should be able to swap out a different front-end on top of the services that the middle tier provides—read-write, REST-style, with JSON in and out.
> * **MVC:** Separation of concerns for request handling, application logic, data access, and view delegation
> * **Best practices:** Help make it easier to do things the right way than to struggle reinventing the wrong way
> * **Scaffolding:** Foundation for a PoC or a real, production application: Less code to write, fewer things to understand when starting an application
> * **Common vocabulary and toolbox:** Shared techniques and tools for our customers, pre-sales, and consultants and less one-off frameworks and plumbing
> * **Front end:** The front end lives in the browser. The front end will provide a rich interface built in the style of modern web apps. It must use a development style that will be familiar to a moderately sophisticated web developer. The front-end will likely be the portion of the application instance that is most likely to be swapped out. As such, we should provide a service-based infrastructure that simplifies migration to another UI technology. The ease of substitution also mitigates the risk of pushing the envelope a little with a thick, SPA architecture. Initial research indicates that Angular has the features, momentum, ease of use, and adoption, and community that would fulfill this requirement.

Additional notes include:

> The middle tier is responsible for brokering data and application logic between UI and the database and providing orchestration for other integrations (e.g. pulling things off of a message queue or getting/putting data from/to another system).

> The middle tier’s role is to broker communication between the front end and the database, to enforce business rules and flow logic, and provide a place to integrate with other non-UI services, for example pulling data from a relational database. In a modern single-page web application the middle tier provides HTTP services using JSON to the front-end.

> We will recommend a three-tiered architecture for new users and proofs-of-concept **as well as large-scale production applications**.

One "function" of the development enviornment is the organization of the files that comprise it. This organization forms the basis on which the other functions of the enviornment are built.

The enviornment is to be capable of locating source code files, checking their syntax, converting or compiling them into runtime forms, and exercising tests of the functionality.

The structure of the files that make up the app and details of the automatated tasks used to develop it are the subjects of many of the remaining sections of this document.
