@vote-on-answer @vote @qnadoc
Feature: Vote on Answer

  Contributors may vote answers up or down. One may only vote on an answer
  once. When an upvote is made to an answer, the author of the answer
  gains reputation points. When a downvote is made to an answer, the author
  of the answer loses reputation points.

  Scenario: Mary votes for Joe's question
    Given I am "Joe"
    When I visit the "ask" page
    And I type "test votes" as the question title
    And I type "**test**" as the question content
    And I enter "e2eTests" as a question tag
    And I submit the question
    And the question id is known as "qid"
    And I am "Mary"
    When I visit the "qnadoc" page with id equal to "qid"
    And I answer the question with "This is my first answer"
    And I am "Joe"
    When I visit the "qnadoc" page with id equal to "qid"
    And I focus on the first answer
    And the content contributor reputation is known as "reputation"
    And I vote the answer up
    Then the content contributor reputation is greater than "reputation"
