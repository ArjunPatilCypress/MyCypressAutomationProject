describe('Sample Testing applicaiton login and sign up test',()=>{

before(()=>{
    cy.visit('https://www.testportal.net/en/use-cases/online-tests-for-training/')
    cy.url()
    cy.log('Visited portal successfully')
})

it('Access Login screen',()=>{

    cy.get('div[class="nI9O1i"]>a').click();
    cy.get('input[name="email"]').type('arjunnipani@gmail.com');
    cy.get('input[name="plainPassword"]').type('Welcome@123');
    cy.get('#terms-and-conditions').check();
    cy.get('button[title="Sign up"]>span').click()
    cy.contains('Email address already in use. ').should('have.text','Email address already in use. ')
    var value = cy.window();
    cy.log(value);
    //cy.get('div[class="mdc-text-field-helper-line"]>div>span').should('have.text','Email address already in use. ')
    cy.get('#terms-and-conditions').check();
    cy.get('button[title="Sign up"]>span').click()
    cy.contains('Email address already in use. ').should('have.text','Email address already in use. ')
    cy.get('input[name="plainPassword"]').parent('div').parent('div').children('div').children('div').should('have.text',' Required field ');

})

})