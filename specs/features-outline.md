# Samplestack Features

## Development Environment Features

*This section is a placeholder for future specification.*

### Browser Development

### Java/Spring Development

### Node Development

## End-To-End Application Features

### Features Exposed Via Multiple UI Elements (`States`, `Dialogs` and/or `Dropdowns`)

Some features have more than one entry point in the user interface. They are listed here. Where a particular state or dialog exposes one of these features, they will appear in brackets.

In addition, it should be noted that many features are accessible directly through properly formed URLs. This method of access will be documented within the individual features and not separately called out here.

- [Login](./features/end-to-end/login.md) (Global)
- [View Logged In Account Info](./features/end-to-end/view-logged-in-account.md) (Global)
- [View StackOverflow Attribution Info](./features/end-to-end/view-so-attribution.md) (Global)
- [Unauthorized Action Prompts Login](./features/end-to-end/unauthorized-prompts-login.md) (Global)
- [Explore Docs By Text Criteria](./features/end-to-end/explore-docs-by-text.md) (`Explore State`, `View Doc State`)
- [Explore Docs By Tag(s)](./features/end-to-end/explore-by-tags.md) (`Explore State`, `View Doc State`)
- [View Contributor](./view-contributor.md) (`Explore State`, `View Doc State`)
- [View Related Tags for Tag](./features/end-to-end/view-related-tags.md) (`Explore State`, `Tags Dialog`)
- [Replace Tag with Related](./features/end-to-end/replace-tag-with-related.md) (`Explore State`, `Tags Dialog`)
- [Author Markdown](./author-markdown.md) (`View Doc State`)

### Features Exposed by the [Explore State](./wireframes/explore.md)

- [\[Explore Docs By Text Criteria\]](./features/end-to-end/explore-by-text.md)
- [\[Explore Docs By Tag(s)\]](./features/end-to-end/explore-by-tags.md)
- [Explore Docs By Date Range](./features/end-to-end/explore-by-date-range.md)
- [Explore Docs by Mine Only](./features/end-to-end/explore-by-mine-only.md)
- [Explore Docs by Resolved Only](./features/end-to-end/explore-by-resolved-only.md)
- [Explore Docs by Multiple Criteria](./features/end-to-end/explore-multiple-criteria.md)
- [Sort Docs List](./features/end-to-end/sort-docs-list.md)
- [Page Through Docs List](./features/end-to-end/page-through-docs-list.md)
- [View Doc](./features/end-to-end/view-doc.md)
- [\[View Contributor\]](./features/end-to-end/view-contributor)
- [\[View Related Tags\]](./features/end-to-end/view-related-tags.md)
- [\[Replace Tag with Related\]](./features/end-to-end/replace-tag-with-related.md)

### Features Exposed by the [Tags Dialog](./wireframes/tags-dialog.md)

- [Browse Tags for Criteria](./features/end-to-end/browse-tags-for-criteria.md)
- [\[Explore Docs By Tag(s)\]](./features/end-to-end/explore-docs-by-tags.md)
- [\[View Related Tags for Tag\]](./features/end-to-end/view-related-tags.md)
- [\[Replace Tag with Related\]](./features/end-to-end/replace-tag-with-related.md)
- [Page Through Tags](./features/end-to-end/page-through-tags.md)
- [Sort Tags](./features/end-to-end/sort-tags.md)

### Features Exposed by the `View Doc State`

- [View Doc](./features/end-to-end/view-doc.md)
- [Comment on Question](./features/end-to-end/comment-on-question.md)
- [Answer Question](./features/end-to-end/answer-question.md)
- [\[Author Markdown\]](./features/end-to-end/author-markdown.md)
- [Comment on Answer](./features/end-to-end/comment-on-answer.md)
- [Vote on Question](./features/end-to-end/vote-on-question.md)
- [Vote on Answer](./features/end-to-end/vote-on-answer.md)
- [View StackOverflow Question](./features/end-to-end/view-so-question)
- [Accept Answer](./features/end-to-end/accept-answer.md)

### Features Exposed by the `Ask State`

- [Ask Question](./features/end-to-end/ask-question.md)
- [\[Author Markdown\]](./features/end-to-end/author-markdown.md)

### Potential Features

*These features have either been discussed or seem to have been referenced in the narrative. We should ensure that they aren't needed, because they are not currently specified.*

- Edit Question
- Edit Answer
- Edit Comment
- Vote Comment
- Filter by Age of question (date asked/created)
- Only show results for where there are no answers or no accepted answer
- Search only within question or only within answers
- Search by subject matter, e.g. for "XML-based languages" would include all tags for languages that fall into this category like XSLT, XPath, XQuery"
