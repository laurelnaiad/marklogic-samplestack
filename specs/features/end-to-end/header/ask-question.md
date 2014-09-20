##### Ask Question

At any time, a user may ask a question, but only if the user has been authenticated as a `Contributor`. When the user elects to ask a question, any current state (aside from their session) is dropped and they enter the `Ask Question State`.

In this state, the user enters a `Title` for the question (which would typically be phrased as a question) and a `Body` for the question.

The question body is written in Github-Flavored Markdown, covered in the `Author Markdown` feature.

The user (may but is not required to) enter `Tags` which are used to indicate subject matter(s) of the question.

When the user has specified a title and a body for the question, they may `Post` the question. When the quetion has been posted, it is displayed via the View Doc feature.
