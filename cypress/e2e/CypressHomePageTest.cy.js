import CypressCommonFunctions from "../functionRepo/CypressCommonFunctions.js"

describe('Google Home Page Test', () => {

    before(() => {
        cy.visit('https://www.cypress.io/')
    })


    it('Enter Text in Google Search bar', () => {
        const cypressHOCF = new CypressCommonFunctions();
        cypressHOCF.cypressHomePageCommonFunctions();
    })
})

