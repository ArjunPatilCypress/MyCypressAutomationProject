class GoogleHomePage {

    googleHomePageTextBox = "#APjFqb";
    googleLogo = 'img[alt="Google"]';
    googleHomePageSearchButton = "div[class='FPdoLc lJ9FBc'] input[name='btnK']";
    //googleSearchResult = "Cypress: JavaScript";
    googleSearchResult="a[href='https://www.cypress.io/']";
    enterTextInTextBox(TextToEnter) {
        cy.get(this.googleHomePageTextBox).focus().type(TextToEnter);
    }

    // clickOnGoogleLogo() {
    //     cy.get(this.googleLogo).click();
    // }

    clickGoogleSearchButton() {
        cy.get(this.googleHomePageSearchButton).click();
        
    }
//Adding a comment to check Git part
    clickOnSearchedResult() {
        cy.get(this.googleSearchResult).invoke('removeAttr','Target').click();
    }
}

module.exports = GoogleHomePage  