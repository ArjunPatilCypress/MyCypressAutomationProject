import GoogleHomePage from "../pages/GoogleHomePage.js"

describe('Google Home Page Test', () => {
    const ghp = new GoogleHomePage();
   
    before(() => {
        cy.visit('https://www.google.com')
    })

    it('Enter Text in Google Search bar', () => {
        let valueToBeEnetre;
        cy.title().should('eq','Google');
        cy.fixture('/TestData/mydata.json').then((data) => {
            valueToBeEnetre = data.dataToEnterGoogle;
            cy.log("Value insite Fixture"+valueToBeEnetre);
            // load data from logo.png
            ghp.enterTextInTextBox(valueToBeEnetre);
          })
          
        //ghp.enterTextInTextBox(valueToBeEnetre);
        ghp.clickOnGoogleLogo();
        ghp.clickGoogleSearchButton();
        cy.get(ghp.googleHomePageTextBox).should('have.value', 'Cypress');
        cy.screenshot('cypress/screenshots/googleSearchCompleted.png');
        ghp.clickOnSearchedResult();
    })
})