@accept-answer @answer @qnadoc
Feature: Accept Answer

  Contributors of a question may accept an answer. One may only a single answer.
  When an answer is accepted, the author of the answer gains reputation points.

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
    And I accept the answer
    When I visit the "qnadoc" page with id equal to "qid"
    And the accepted answer is "This is my first answer"
