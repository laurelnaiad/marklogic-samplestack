# Design Goals and Constraints

## Overview

The browser app should demonstrate best-practices in modern browser development under the MVC paradigm.  These include that:

* The **application and the developer experience should scale** to development and deployment of large, real-world apps developed by teams.
* The application should be **testable** and the developer experience should **support and facilitate** the development and execution of tests.
* It should adhere to **standards** such as RESTful JSON over AJAX-style HTTP.
* It should prefer **components that are popular and/or considered best-of-breed** in the development community.

It should demonstrate best practices in security in the browser tier.

It is *not* a requirement to build libraries or other components packaged for reuse nor which would be supported by MarkLogic in other applications, however, to the extent practical, the app should be structured so that developers may "borrow" code from the application to use in their own application development if they choose to follow the reference architecture.

In order to support this goal, the application should strive to minimize divergence from in-built MarkLogic APIs, such as `search` and `CRUD` features. However, where alternate APIs improve the overall quality of the three-tiered architecture, it may be desirable to diverge from the MarkLogic API at the appropriate level.  

These goals will be referenced within discussion of concrete decision choices below.

As a part of the MarkLogic product, the Samplestack browser application is delivered as a portion of the Samplestack github repository at [https://github.com/marklogic/marklogic-samplestack](https://github.com/marklogic/marklogic-samplestack).

#### Developer Experience and Task Automation

Developers experience the application through its source code and through automation provided to help develop, test and deploy it.

From a design perspective, the application development process should allow and enable the developer to carry out these functions as necessary, while focused primarily on the application itself.

As such, a prime design goal is to automate the experience in a manner such that, subject to some constraints and guidelines for the organization of source code files, the application development experience should not from moment to moment require re-authoring of the tooling that is used to enable these process functions.

More information about the user interfaces and features of the development process automation included in Samplestack is in [section 4.1](#SamplestackBrowser--FunctionalSpecification-4.1ForDevelopers).

The overarching goal of Samplestack as a whole is to demonstrate and teach the MarkLogic Reference Architecture and how it can be used to build both small and large apps, from proofs-of-concept to production-ready instances of large, complex applications.

A major challenge for Samplestack is that in actuating a full example we must implement technology that is not in and of itself directly related to MarkLogic. It compounds that challenge that we wish to demonstrate how a **large-scale **production-ready, real-world** application can be developed in the same manner that a one-off demo app may be. We thus must make affordances and should provide an infrastructure that works in both cases.  

Samplestack, while seeking to demonstrate the basics of development in the architecture, must also demonstrate how those basics can be applied to an app whose development process and whose code itself *can be* scaled in a much larger project.

We also have the hope that customers will be able to isolate a skeleton from within the Samplestack application that they could extract and use as the basis for their own applications.

Some of the areas in which these tradeoffs surface in the Samplestack Browser application are:

- Configurability
- Security
- Standards
- Technology Decisions as Constraints
- Abstraction and Extensibility
- Development Environment Automation
- Reliability
- Footprint

This section discusses design goals and constraints within the context of the aforementioned tradeoffs *on a high level*.  

It is not possible to discuss the constraints of the design without discussing certain of the technology choices and dependencies that are selected in order to satisfy the goals and constraints.  As such, those choices are discussed and documented in this section.

Further detail on implementation choices relating to specific external dependencies can also be found throughout the remainder of the specification.

*In this release, we are not officially marking any code or as reusable -- Samplestack is built first and foremost to satisfy the goal of demonstration within the context of its ficitious requirements. However, in the longer run, by releasing some aspects of an application skeleton as officially supported components, we will be able to ease the development of applications that follow certain architectural sub-patterns and technology choices.  Officially abstracting complexities into supported components may be very valuable to application developers, since in an MVC Browser app, much of the complexity is (intentionally) housed in the browser tier.*
