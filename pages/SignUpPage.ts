import { expect, Page, Locator } from '@playwright/test';

export class SignUpPage{
    private page: Page;
    listOfCivility: Locator;
    firstNameInput: Locator;
    lastNameInput: Locator;
    dateOfBirthInput: Locator;
    emailInput: Locator;
    phoneInput: Locator;
    submitButton: Locator;
    firstNameErrorEle: Locator;
    lastNameErrorEle: Locator;
    dateOfBirthErrorEle: Locator;
    emailErrorEle: Locator;
    mobileErrorEle: Locator;
    constructor(page: Page) {
        this.page = page;
        this.listOfCivility = page.locator('#fieldControl-input-title div[class=" css-6grebl"]')
        this.firstNameInput = page.locator('#fieldControl-input-firstName');
        this.lastNameInput = page.locator('#fieldControl-input-lastName');
        this.dateOfBirthInput = page.locator('#fieldControl-input-dateOfBirth');
        this.emailInput = page.locator('#fieldControl-input-email');
        this.phoneInput = page.locator('#fieldControl-input-mobilePhoneNumber');
        this.submitButton = page.locator('button[type="submit"]');
        this.firstNameErrorEle = page.locator('//input[@id="fieldControl-input-firstName"]/ancestor::div[@class=" css-q4fzhd"]/following-sibling::div/span')
        this.lastNameErrorEle =page.locator('//input[@id="fieldControl-input-lastName"]/ancestor::div[@class=" css-q4fzhd"]/following-sibling::div/span')
	    this.dateOfBirthErrorEle = page.locator('//input[@id="fieldControl-input-dateOfBirth"]/ancestor::div[@class=" css-q4fzhd"]/following-sibling::div/span')
        this.emailErrorEle = page.locator('//input[@id="fieldControl-input-email"]/ancestor::div[@class=" css-q4fzhd"]/following-sibling::div/span')
        this.mobileErrorEle = page.locator('//input[@id="fieldControl-input-mobilePhoneNumber"]/ancestor::div[@class=" css-bxy6ch"]/following-sibling::div/span')   
    }

async selectCivility(civility: string) {
    await this.listOfCivility.first().click();
    const civilityOption = this.page.locator(`div.css-6grebl`, { hasText: civility });
    await civilityOption.click();
}

    async fillFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }
    async fillLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }
    async fillDateOfBirth(dateOfBirth: string) {
        await this.dateOfBirthInput.fill(dateOfBirth);
    }
    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }
    async fillPhone(phone: string) {
        await this.phoneInput.fill(phone);
    }
    async clickSubmitButton() {
        await this.submitButton.click();
    }
    async getFirstNameError(expectedError: string) {
        const errorText = await this.firstNameErrorEle.innerText();
        expect(errorText).toContain(expectedError);
    }

    async getLastNameError(expectedError: string) {
        const errorText = await this.lastNameErrorEle.innerText();
        expect(errorText).toContain(expectedError);
    }

    async getDateOfBirthError(expectedError: string) {
        const errorText = await this.dateOfBirthErrorEle.innerText();
        expect(errorText).toContain(expectedError);
    }

    async getEmailError(expectedError: string) {
        const errorText = await this.emailErrorEle.innerText();
        expect(errorText).toContain(expectedError);
    }

    async getPhoneError(expectedError: string) {
        const errorText = await this.mobileErrorEle.innerText();
        expect(errorText).toContain(expectedError);
    }
}