@comment-on-question @comment @qnadoc
Feature: Comment on Question

  Contributors may comment on questions as many times as they like.

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
    And I focus on the question
    And I comment on the answer with "this is my comment"
    Then the comment is "this is my comment"
