

// const Page = require('./page');
const {assert} = require('chai')
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
languagesLocator = '//ul[contains(@class, "localeSelectorList")]//li'
langWithLink = '//*[@id="pageFooter"]/ul/li/a' //only the elements with links
currentLanguage = '//*[@id="pageFooter"]/ul/li[1]'

async launch(){

await browser.url('https://www.facebook.com')
await browser.pause(1000)
}

async enterLoginEmail(loginEmail) {

await this.commands.typeInWebElement(this.loginEmailLocator, 'Jeremy');
await browser.pause(1000)
}

async enterLoginPassword(loginPwd) {

await this.commands.typeInWebElement(this.loginPwdLocator, '12345');
await browser.pause(1000)
}

async clickLogin(){
    
await this.commands.clickWebElement(this.loginBtnLocator);
await browser.pause(1000);
}

async verfErrMsg(){
return await this.commands.isWebElementDisplayed(this.loginErrMsg);
}

async verfLanguage(){
    const languageArrays = []
    for(const languagePage of languageArrays){
    const pageTemp = await this.commands.findWebElement(this.languagePage)
    console.log(pageTemp);
    await pageTemp.click();
    }
    const firstLanguage = await this.commands.findWebElement(this.currentLanguage)
    console.log(firstLanguage.getText())
    console.log(firstLanguage.getTagName('a'))
    assert.isTrue(firstLanguage.getTagName('a') != 'a' )

    const languages = await this.commands.findWebElements(this.langWithLink)
    let languageElement = [];

        for(const language of languages){
            let languageWithText = await language.getText();
            console.log(languageWithText)
            assert.isTrue(language.getTagName('a') != null)
            console.log(language.getTagName('a'))


    // const languageWithLinks = await this.commands.findWebElements(this.langWithLink)  

    //     for(const languageLink of languageWithLinks){
    //         const languageLinkText = await languageLink.getText()
    //     }
            
    //     }   
        // await language.click()
        // await browser.pause(3000)
        // console.log(await language.getText())

        // const languagesWithLink = await this.commands.findWebElements(this.languagesLocator)

        // for(let elementWithLink of languages){
        //     if(elementWithLink.getText() === currentLanguage){
        //         console.log('It failed')
        //     }

        //     else {
        //         console.log('It passed')
        //     }
        // }
        
            
    }   
    // await browser.closeWindow();

    // console.log(languages[0].getText())
        // for(let language of languages) {
        // // languageElement = languageElement + " " + await languages.getCSSProperty();

        //     if(await languages[0].getText() === 'English (US)'){
        //     console.log('Current language')
        //     }

        //     else{
        //     console.log('Not the current language')
        //     }
        // }
////*[@id="pageFooter"]/ul/li[2]/a
}
}


module.exports = new websiteFuncs();

