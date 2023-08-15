import GoogleHomePage from "../pages/GoogleHomePage.js"

describe('Google Home Page Test', () => {
    const ghp = new GoogleHomePage();
    before(() => {
        cy.visit('https://www.google.com')
    })

    it('Enter Text in Google Search bar', () => {
        ghp.enterTextInTextBox('Cypress');
        ghp.clickOnGoogleLogo();
        ghp.clickGoogleSearchButton();
        cy.get(ghp.googleHomePageTextBox).should('have.value', 'Cypress');
        cy.screenshot('cypress/screenshots/googleSearchCompleted.png');
        ghp.clickOnSearchedResult();
    })
})