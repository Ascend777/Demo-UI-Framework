

// const Page = require('./page');

const Commands = require("../../commands");


// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get inputUsername () {
//         return $('#username');
//     }

//     get inputPassword () {
//         return $('#password');
//     }

//     get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// module.exports = new LoginPage();
//////////////////////////////////////////////////////////////////////////////////////////////////
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
// module.exports = class Page {
//     /**
//     * Opens a sub page of the page
//     * @param path path of the sub page (e.g. /path/to/page.html)
//     */
//     open (path) {
//         return browser.url(`https://the-internet.herokuapp.com/${path}`)
//     }
// }
class websiteFuncs {

commands = new Commands

loginEmailLocator = '#email';
loginPwdLocator = '#pass';
loginBtnLocator = '<button>';
loginErrMsg = '//div[text()="The password you’ve entered is incorrect. "]'


async launch(){
await browser.url('https://www.facebook.com')
await browser.pause(10000)
}

async enterLoginEmail(loginEmail) {
await this.commands.typeInWebElement(this.loginEmailLocator, 'Jeremy');
await browser.pause(3000)
}

async enterLoginPassword(loginPwd) {
await this.commands.typeInWebElement(this.loginPwdLocator, '12345');
await browser.pause(3000)
}

async clickLogin(){
await this.commands.clickWebElement(this.loginBtnLocator);
await browser.pause(3000);
}
async verfErrMsg(){
await this.commands.isWebElementDisplayed(this.loginErrMsg);
await browser.pause(3000);
}




}

module.exports = new websiteFuncs();

