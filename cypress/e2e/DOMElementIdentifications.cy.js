describe('Test all DOM element identification mechanisms', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/traversal');

    })



    it('children test', () => {
        cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Data')
    })

    it('Closest Test', () => {

        cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')
    })

    it('Equal Test', () => {

        cy.get('.traversal-list>li').eq('0').should('contain', 'tabby')
    })

    it('Filter Test', () => {

        cy.get('.traversal-nav>li').filter('.active').should('contain', 'About')
    })

    it('Find Test', () => {

        cy.get('.traversal-nav').find('a').should('have.length', '3')
    })

    it('First Test', () => {

        cy.get('.traversal-nav').find('li').find('a').first().should('have.text', 'Home').click();
    })

    it('Last Test', () => {

        cy.get('.traversal-nav').find('li').last().should('have.text', 'Services').click()

    })

    it('Next test',()=>{
        //cy.get('.traversal-nav').find('li').find('a').first().should('have.text','Home').next('li').should('have.text','About')
        cy.get('.traversal-ul')
        .contains('apples').next().should('contain', 'oranges')
    })

    it('Next all Test',()=>{

        cy.get('.traversal-next-all>li').first().nextAll().should('have.length','4')

    })

    it('Next Untill Test',()=>{

        cy.get('#veggies').nextUntil('#nuts').should('have.length','3')
    })

})