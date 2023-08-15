class CypressHomePage {
    loginLink = 'a[data-cy="header-login"]';
    prouctsLink = 'button[id="dropdownProduct"]'
    subLinksOfProducts = 'astro-island>a';

    cypressHomePageProductLinkClick() {
        cy.get(this.prouctsLink).click();
        //cy.get(this.prouctsLink).trigger('mouseover')
        // cy.wait(2000)
    }
    cypressHomePageSublinksUnderProducts() {
        cy.get(this.subLinksOfProducts);
    }
}

module.exports = CypressHomePage