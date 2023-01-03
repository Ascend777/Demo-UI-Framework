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
    # When I enter my login
    # When I enter my password
    # When I click login 
    # Then I verify error message