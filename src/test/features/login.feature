Feature: User authentication tests

  Background: 
    Given User navigate to the test application
    And User click in the login link

  Scenario: Login should be success
    And User enter the username as "ortoni"
    And User enter the password as "Pass1234"
    When User click Login Button
    Then login should be success

  Scenario: Login should NOT be success
    And User enter the username as "ortoni123"
    And User enter the password as "Pass1234"
    When User click Login Button
    Then login should be NOT be success


# this Scenario will fail
  Scenario: this scenario should fail
    And User enter the username as "ortoni123"
    And User enter the password as "Pass1234"
    When User click Login Button
    Then login should be success