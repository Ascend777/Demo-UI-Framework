class Commands {


    async findWebElement(locator) {
        return await $(locator);
    }


    async findClickableWebElement(locator) {
        await $(locator).waitForClickable();
        return await $(locator);
    }

    async findWebElements(locator) {
        await browser.waitUntil(async () => {
            const elements = await $$(locator);
            return elements.length > 0;
        });
        return await $$(locator);
    }

    async clickWebElement(locator) {
        const element = await this.findWebElement(locator);
        await element.click();
    }

    async scrollAndClickWebElement(locator) {
        const element = await this.findWebElement(locator);
        await element.scrollIntoView();
        await element.click();
    }


    async scrollToView(locator) {
        const element = await this.findWebElement(locator);
        await element.scrollIntoView();
    }

    async typeInWebElement(locator, data) {
        const element = await this.findWebElement(locator);
        await element.setValue(data);
    }

    async isWebElementEnabled(locator) {
        const element = await $(locator);
        return await element.isEnabled();
    }

    async isWebElementDisplayed(locator) {
        const element = await $(locator);
        return await element.isDisplayed();
    }

    async isWebElementDisplayedWithWait(locator) {
        await $(locator).waitForDisplayed();
        return await $(locator).isDisplayed();
    }

    async selectFromDropdown(locator, selectThis) {
        const dropdownElement = await this.findWebElement(locator);
        await dropdownElement.selectByVisibleText(selectThis);
    }

    async getTextFromWebElement(locator) {
        const element = await this.findWebElement(locator);
        return await element.getText();
    }
    async getIntegerFromWebElement(locator) {
        const element = await this.findWebElement(locator);
        return await parseInt(element.getText());
    }

    async getAttrValueFromWebElement(locator, attribute) {
        const element = await this.findWebElement(locator);
        await element.waitForDisplayed();
        return await element.getAttribute(attribute);
      }

    async selectFromAutoSuggestions(locatorForAutoSuggestionElements, valueToSelect) {
        const autoSuggestionElements = await this.findWebElements(locatorForAutoSuggestionElements);

        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await autoSuggestionElement.getText();
            if (suggestionText.toLowerCase().localeCompare(valueToSelect.toLowerCase()) === 0) {
                await autoSuggestionElement.click();
                break;
            }
        }
    }

    async selectDateFromCalendar(monthHeadingLocator, goToNextMonthLocator, allDatesLocator, dateToSelect) {
        for (let i=1 ; i <= 12 ; i++) {
            const monthSeen = await this.isWebElementDisplayed(monthHeadingLocator);
            if (monthSeen) {
                break;
            }
            await this.clickWebElement(goToNextMonthLocator);
        }
        const allDateElements = await this.findWebElements(allDatesLocator);
        for (const dateElement of allDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date.localeCompare(dateToSelect) === 0) {
                await dateElement.click();
                break;
            }
        }
    }

    async getAllWindowHandles() {
        await browser.waitUntil(async () => {
            const allHandles = await browser.getWindowHandles();
            return allHandles.length > 1;
        });
        return await browser.getWindowHandles();
    }

    async getCurrentWindowHandle() {
        return await browser.getWindowHandle();
    }

    async switchToWindowHandle(handle) {
        await browser.switchToWindow(handle);
    }

    async closeWebWindow() {
        await browser.closeWindow();
    }
 
    async getWindowsCount() {
        const allHandles = await this.getAllWindowHandles();
        return allHandles.length;
    }

    async getWindowTitle() {
        return await browser.getTitle();
    }

    }
    


module.exports = Commands;