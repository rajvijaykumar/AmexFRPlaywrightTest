import {Page} from "@playwright/test"
import { HomePage } from "./HomePage";
import { SignUpPage } from "./SignUpPage";
import { GlodCardPage } from "./GlodCardPage";
import { SpecialCardsPage } from "./SpecialCardsPage";

export class POManager {
    page: Page;
    homePage : HomePage;
    signUpPage : SignUpPage;
    glodCardPage : GlodCardPage;
    specialCardsPage : SpecialCardsPage;
  constructor(page: Page) {
    this.page = page
    this.homePage = new HomePage(this.page);
    this.signUpPage = new SignUpPage(this.page);
    this.glodCardPage = new GlodCardPage(this.page);
    this.specialCardsPage = new SpecialCardsPage(this.page);
  }

    getHomePage() {
        return this.homePage;
    }

    getSignUpPage() {
        return this.signUpPage;
    }

    getGlodCardPage() {
        return this.glodCardPage;
    }

    getSpecialCardsPage() {
        return this.specialCardsPage;
    }
}