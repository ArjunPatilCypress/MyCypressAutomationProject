
const neatCSV = require('neat-csv');

describe('Work form fill up test', () => {

    let table;

    before(() => {
        cy
            .fixture('/TestData/workForm.csv')
            .then(neatCSV)
            .then(data => {
                table = data;
            })
            .then((dataForme) => {
                dataForme = table;
                cy.log(dataForme);
            })
            .then(console.table);
        ;
    })

    it('Form Fill up through CSV', () => {
        cy.log("Getting 08162023")

        const totalValue1 = table.length;
        cy.log("First" + totalValue1);

        const totalValue2 = Math.floor(Math.random() * table.length);
        cy.log("Second" + totalValue2);

        for (let i = 0; i < totalValue1; i++) {
            cy.visit('https://auth.monday.com/p/forms/users/sign_up_new#soft_signup_from_step');
            cy.log("Priting values first column " + table[i]['email']);
            cy.log("Priting values second column " + table[i]['fullname']);
            cy.log("Priting values third column " + table[i]['pasword']);
            cy.log("Priting values fourth column " + table[i]['AccountName']);
            //cy.get('a[class="button gradient-button w-button"]').click();
            // cy.get('input[placeholder="name@company.com"]').type(table[i]['email']);
            // //cy.wait(7000);
            // cy.get('div[class="submit-button-wrapper"]>button').click();
            // //cy.wait(7000);
            // cy.get('input[placeholder="Enter your full name"]').type(table[i]['fullname']);
            // cy.get('input[placeholder="Enter at least 8 characters"]').type(table[i]['pasword']);
            // cy.get('input[id="account[name]"]').type(table[i]['AccountName']);
        }

    })
          
    })

