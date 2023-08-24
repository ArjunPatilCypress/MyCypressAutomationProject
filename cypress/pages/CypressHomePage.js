class CypressHomePage {
    loginLink = 'a[data-cy="header-login"]';
    prouctsLink = 'button[id="dropdownProduct"]'
    subLinksOfProducts = 'astro-island>a';
    cypresslogo = 'img[alt="Logo"]';
    cypressHomePageProductLinkClick() {
        cy.get(this.prouctsLink).click();
        //cy.get(this.prouctsLink).trigger('mouseover')
        cy.wait(500)
    }
    cypressHomePageSublinksUnderProducts() {
        cy.get(this.subLinksOfProducts);
    }

    cypressHomePagecypresslogo() {
        cy.get(this.cypresslogo).click();;
    }

}

module.exports = CypressHomePage