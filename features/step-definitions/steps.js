const { Given, When, Then } = require('@wdio/cucumber-framework');
// const { expect } = require("chai");
const loginPage = require('../pageobjects/loginPage');
const SecurePage = require('../pageobjects/securePage');
const uniquePage = require('../pageobjects/uniquePage');


Given(/^I Browse to facebook$/, async () => {
    await loginPage.launch()
    });


When(/^I enter my login$/, async () => {
    await loginPage.enterLoginEmail();
    });


When(/^I enter my password$/, async () => {
    await loginPage.enterLoginPassword();
    });


When(/^I click login$/, async () => {
    await loginPage.clickLogin();
    });


Then(/^I verify error message$/, async () => {
    const verify = await loginPage.verfErrMsg();
    expect(verify,'error message does not appear').to.be.true;
});






// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

