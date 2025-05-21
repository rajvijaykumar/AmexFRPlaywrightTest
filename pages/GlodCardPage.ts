import { Page, Locator } from '@playwright/test';

export class GlodCardPage {
    private page: Page;
    applyForCardBtn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.applyForCardBtn = page.locator('div[class*="stickySideRail-modules__desktop"] a[data-qe-id="Button"]');
    }

    async clickOnApplyForCardButton() {
        try {
            await this.applyForCardBtn.click();
        } catch (e) {
            console.error('Error clicking Apply for Card button:', e);
        }
    }
}