@facebook
Feature: Verifications of homepage

  Scenario: Verify error message when input wrong login information

    # Given I am on the login page
    # When I login with <username> and <password>
    # Then I should see a flash message saying <message>

    # Examples:
    #   | username | password             | message                        |
    #   | tomsmith | SuperSecretPassword! | You logged into a secure area! |
    #   | foobar   | barfoo               | Your username is invalid!      |
    
    Given I Browse to facebook
    When I enter my login
    When I enter my password
    When I click login 
    When I verify error message
    Then I verify that the first language does not include a link