# Design Overview

## Purpose

The Samplestack MVC Browser App is part of the reference implementation of the [MarkLogic Reference Architecture](https://wiki.marklogic.com/display/rootwiki/MarkLogic+8+Reference+Architecture). As such, the primary objective of the Samplestack MVC Browser App is to **demonstrate how developers can build applications with MarkLogic**.

The reference architecture states that the main purpose of the reference implementation is:

> to demonstrate how a developer would put together a **real application**.

And that:

> It should serve as an entry point for training or documentation on more advanced topics, providing a shared baseline across the various media that we use to reach developers. Our documentation and training should use the reference application instance as the primary means to introduce new developers to building applications. As we design workflows for new developers ramping up on MarkLogic, building an application in their own environment should come quickly after a quick intro to core concepts and basic query and document management, for example in JavaScript in Query Console.

### Stakeholders

There are two very distinct classes of stakeholders for Samplestack.  Throughout this document, distinctions between `developers` and `users` will be made.

`Developers` will be considered to be those people who involve themselves with how Samplestack is *designed, developed, deployed, etc*.  Such a "user" is really not a user of the application, but is our true target audience as discussed above.  As such, a great deal of focus in this document will be on their interaction with Samplestack and on how the design of the application supports *their* mission to build applications with MarkLogic technology.

`End Users` are essentially a fictional group of people who are sharing knowledge on technical topics (and specifically on software development-related topics). Because the purpose of the Samplestack application has been artificially developed in order to derive requirements, Samplestack Users (herein referred to as "users" or "end users") are not our target audience, yet their imagined goals are used to drive the application design.

Unless otherwise specified, we assume that `developers` are a proxy for other "meta" stakeholders such as a development manager, a product manager, the owner of the Samplestack application, the configuration management specialist, the graphical designer, etc.  We group these people together for simplicity and in order to avoid assumptions about the shape and content of the pool of people who are part of making the fictitious Samplestack and making it run.
