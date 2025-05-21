import { test} from '@playwright/test';
import { POManager } from '../pages/POManager';
import testData from '../utils/testData.json';

test('@smoke Validate UI elements in Gold Card application flow with invalid first name data', async ({ page }) => {

    const poManager = new POManager(page)
    const homePage = poManager.getHomePage();
    await homePage.launchAmexUrl();
    await page.waitForTimeout(4000); // Wait for 2 seconds to ensure the page is fully loaded
    await homePage.clickOnAcceptAllButton();

    await homePage.clickOnCard('Cartes Particuliers');
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is fully loaded

    const specialCardsPage = poManager.getSpecialCardsPage();
    await specialCardsPage.clickOnLearnMoreLink('Carte Gold American');

    const goldCardPage = poManager.getGlodCardPage();
    await goldCardPage.clickOnApplyForCardButton();

    const signUpPage = poManager.getSignUpPage()
    await signUpPage.selectCivility('M.');
    await signUpPage.fillFirstName(testData.firstName);
    await signUpPage.clickSubmitButton();

    await signUpPage.getFirstNameError(testData.firstNameError);
});

test('@smoke Validate UI elements in Gold Card application flow with invalid last name data', async ({ page }) => {

    const poManager = new POManager(page)
    const homePage = poManager.getHomePage();
    await homePage.launchAmexUrl();
    await page.waitForTimeout(4000); // Wait for 2 seconds to ensure the page is fully loaded
    await homePage.clickOnAcceptAllButton();

    await homePage.clickOnCard('Cartes Particuliers');
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is fully loaded

    const specialCardsPage = poManager.getSpecialCardsPage();
    await specialCardsPage.clickOnLearnMoreLink('Carte Gold American');

    const goldCardPage = poManager.getGlodCardPage();
    await goldCardPage.clickOnApplyForCardButton();

    const signUpPage = poManager.getSignUpPage()
    await signUpPage.selectCivility('M.');
    await signUpPage.fillFirstName(testData.firstName);
    await signUpPage.fillLastName(testData.lastName);
    await signUpPage.fillDateOfBirth(testData.dateOfBirth);
    await signUpPage.fillEmail(testData.email);
    await signUpPage.fillPhone(testData.phone);
    await signUpPage.clickSubmitButton();
    await signUpPage.getLastNameError(testData.lastNameError);
});

test('@smoke Validate UI elements in Gold Card application flow with invalid first, last name, dob, email and mobile number', async ({ page }) => {

    const poManager = new POManager(page)
    const homePage = poManager.getHomePage();
    await homePage.launchAmexUrl();
    await page.waitForTimeout(4000); // Wait for 2 seconds to ensure the page is fully loaded
    await homePage.clickOnAcceptAllButton();

    await homePage.clickOnCard('Cartes Particuliers');
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is fully loaded

    const specialCardsPage = poManager.getSpecialCardsPage();
    await specialCardsPage.clickOnLearnMoreLink('Carte Gold American');

    const goldCardPage = poManager.getGlodCardPage();
    await goldCardPage.clickOnApplyForCardButton();

    const signUpPage = poManager.getSignUpPage()
    await signUpPage.selectCivility('M.');
    await signUpPage.fillFirstName(testData.firstName);
    await signUpPage.fillLastName(testData.lastName);
    await signUpPage.fillDateOfBirth(testData.dateOfBirth);
    await signUpPage.fillEmail(testData.email);
    await signUpPage.fillPhone(testData.phone);
    await signUpPage.clickSubmitButton();
    await signUpPage.getLastNameError(testData.lastNameError);
});