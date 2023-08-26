// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


///<reference type ="Cypress">
///<reference type ="Cypress-xpath">

// Cypress.Commands.add('AssertionsVerifyShouldValue',(value) =>{

//     cy.should('have.value',value);

// })

Cypress.Commands.add('toGetExpectedColumnValue', (rowNumber, columnNumber) => {
    cy.log('Values Provided. Row number' + rowNumber + ' and column ' + columnNumber);
    cy.get('table#table1 > tbody tr:nth-child(' + rowNumber + ')').each(($rows, index, $rowsList) => {
        cy.wrap($rows).within(() => {
            cy.get('td:nth-child(' + columnNumber + ')').each(($columns, index, $columnsList) => {
                cy.log("Values " + $columns.text());
                cy.get($columns).click();
                cy.log('index value ' + index).then(() => {
                    if (index == 6) {
                        cy.get($columns).click();
                        cy.log('clicked on' + $columns.text())
                    }
                })
            })
        })
    })



})

Cypress.Commands.add('tableLenghtVerification', (element, lengthToVerify) => {
    cy.log("Element value provided as " + element);
    cy.get(element).should('have.length', lengthToVerify);
})