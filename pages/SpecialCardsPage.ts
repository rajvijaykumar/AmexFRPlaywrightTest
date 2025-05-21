import { Page, Locator } from '@playwright/test';

export class SpecialCardsPage {
    private page: Page;
    listOfCardTile: Locator;
    constructor(page: Page) {
        this.page = page;
        this.listOfCardTile = page.locator('div[class="cardList-modules__container___3K7ta"]>div>div');
    }

    async clickOnLearnMoreLink(cardName: string) {
        try {
            for(let i = 0; i < await this.listOfCardTile.count(); i++) {
                const cardText = (await this.listOfCardTile.nth(i)
                                 .locator('div[class*="sc_at_grid_colSm5"]>div>div[class*="helvetica_bold"]')
                                 .innerText()).trim();
                if (cardText.includes(cardName)) {
                    await this.listOfCardTile.nth(i).locator('a[data-qe-id="Button"]').click();
                    break;
                }
            }
        } catch (e) {
            console.error(`Error clicking on card ${cardName}:`, e);
        }
    }
}