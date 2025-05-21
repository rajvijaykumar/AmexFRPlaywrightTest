import { Page, Locator } from '@playwright/test';

export class HomePage {
    private page: Page;
    btnAcceptAll: Locator;
    listOfCards: Locator;
  constructor(page: Page) {
    this.page = page;
    this.btnAcceptAll = page.locator('button[data-testid*="accept-all"]')
    this.listOfCards = page.locator('div[class*="col-md-3 "] div[class*="product-nav-items4 flex"]')	
  }

  async launchAmexUrl() {
    await this.page.goto('https://www.americanexpress.com/fr-fr/?inav=NavLogo');
  }

  async clickOnAcceptAllButton() {
    try {
      await this.btnAcceptAll.click();
    } catch (e) {
      console.error('Error clicking Accept All button:', e);
    }
  }

  async clickOnCard(cardName: string) {
    try {
      const card = this.listOfCards.locator(`text=${cardName}`);
      await card.click();
    } catch (e) {
      console.error(`Error clicking on card ${cardName}:`, e);
    }
  }

}