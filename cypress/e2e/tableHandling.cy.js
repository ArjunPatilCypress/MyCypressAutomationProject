describe('My Table handling', () => {


    before(() => {
        cy.visit('https://the-internet.herokuapp.com/tables');
    })

    it('Table Handling part', () => {

        let rowNumber = 2;
        let columnNumber = 6;

        //Printing data of Paragraph
        cy.get('div[class="example"]>p').eq(0).should('have.text', 'Often times when you see a table it contains data which is sortable -- sometimes with actions that can be taken within each row (e.g. edit, delete). And it can be challenging to automate interaction with sets of data in a table depending on how it is constructed.')
        cy.get('div[class="example"]>p').eq(0).invoke('text').as('name')
        cy.get('@name').then((name) => {
            cy.log('Student Name: ' + name) //prints name
        })
        cy.tableLenghtVerification('table#table1 > thead tr > th', 6);
        cy.tableLenghtVerification('table#table1 > tbody tr ', '4');
        cy.toGetExpectedColumnValue(2, 4);
    })
})