##### Explore Docs By Text Criteria

**Note: In addition to being available in the `Explore State`, this feature is also made available in the `View Doc State`.**

The user may enter criteria by which to search for documents. Such criteria are *not* applied as the user types, but rather when the user signals to apply them.

The syntax for textual search is standard MarkLogic query syntax.

In addition to query text searches, the following attributes are exposed for searching:

- userName (the userName of contributors who asked, answered or commented on a questions)
- resolved (true if the asker has accepted an answer)
- lastActivity (the dateTime of the last activity performed on the document -- e.g. ask, answer, comment, accept, vote)
- tag (set of tags applied to the document)

While exploring docs by text, the user may view Search Tips.
