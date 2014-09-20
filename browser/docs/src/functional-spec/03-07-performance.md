## Performance

In an application such as Samplestack, performance in the browser tier **shouldn't** be a major issue, as long as we do not send very large chunks of data to the browser nor make any other relatively junior mistakes in the architecture of the browser app.

To the extent that performance for the application as a whole is a concern, such issues are intentionally pushed down to the lower tiers and to the decisions made in designing the middle tier APIs such that round-tripping with the browser is efficient.

The APIs exposed by the middle tier of the application and their tradeoffs are to be discussed in other documents.

### Performance Testing

Measurability and monitoring of performance is an important aspect of 3-tiered application design and data-centric applications.

We will develop a plan to enable performance of the end-to-end application to be measured. In particular, we wish to measure degradation of performance under stress through concurrent usage or continuous usage, and we wish to measure performance of the end-to-end application in comparison to the services that are invoked by the application in the MarkLogic database tier.

Additional measures may also be considered.
