@explore-docs-by-tags @explore
Feature: Explore Docs By Facet Tags

  When searching for documents, a facet filter may be applied to limit results to
  those documents which created by the user.

  Scenario: As a visitor filtering by the tag "javascript", I see the correct results
    Given I am a visitor
    When I visit the "explore" page
    And I clear all filters
    When I filter documents by selecting tag = "javascript"
    Then the docs count is "1041"
    When I focus on the "first" search result,
    Then the result "title" is "Q: Load JSON data into div based off of select option value"
    When I clear tag filters
    Then the docs count is "1903"
    When I focus on the "last" search result,
    Then the result "title" is "Q: Show modal if page refreshed, but not if a link is followed"

  Scenario: As a visitor searching for a tag  with "aja", I see the correct suggestions and results
    Given I am a visitor
    When I visit the "explore" page
    And I clear all filters
    When I search for tag = "aja"
    Then the tag suggestion count is "2"
    Then the first suggestion in the tag suggestion list shows "ajax"
    Then the last suggestion in the tag suggestion list shows "asp.net-ajax"
    And I press key enter in tag search
    Then the docs count is "98"
    When I focus on the "first" search result,
    Then the result "title" is "Q: Method undefined when calling it from $ajax.success"
    When I clear tag filters
    Then the docs count is "1903"
    When I focus on the "last" search result,
    Then the result "title" is "Q: Show modal if page refreshed, but not if a link is followed"

  Scenario: As a visitor looking at all tags, I see the correct list of tags
    Given I am a visitor
    When I visit the "explore" page
    And I open the more tags dialogue
    Then the first tag in the all tags dialogue is "javascript"
    Then the last tag in the all tags dialogue is "xpath"
    And I close the more tags dialogue

  Scenario: As a visitor looking at all tags, I see the correct list of tags by name
    Given I am a visitor
    When I visit the "explore" page
    And I open the more tags dialogue
    And I sort all tags by name
    Then the first tag in the all tags dialogue is ".each"
    Then the last tag in the all tags dialogue is "air"
    And I close the more tags dialogue
    Then the docs count is "1903"
    When I focus on the "last" search result,
    Then the result "title" is "Q: Show modal if page refreshed, but not if a link is followed"
