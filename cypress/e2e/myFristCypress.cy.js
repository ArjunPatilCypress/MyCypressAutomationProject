import { expect } from 'chai';
import 'cypress-iframe'

describe('template spec', () => {
  console.log('starting with execution for me');

  it.skip('passes', () => {
    cy.visit('https://www.google.com')
    cy.wait(2000)
    cy.title().should('eq', 'Google')
    cy.wait(5000)
    cy.get('#APjFqb').focus()
    cy.log('Focus Done bhau')
    cy.wait(5000)
    cy.get('#APjFqb').type('About to blur').blur()
    cy.log('Blur done bhau')
    cy.wait(5000)
    cy.get('#APjFqb').clear()
    cy.log('clear done bhau')
  })

  it('My test', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.wait(5000)
    cy.get('.action-labels>.label').click({ multiple: true })
    cy.wait(5000)
    // Ignore error checking prior to clicking
    cy.get('.action-opacity>.btn').click({ force: true })
    cy.log('Force True bhau')
    cy.wait(5000)
    cy.scrollTo('bottom')
    cy.wait(2000)

    cy.get('.trigger-input-range')
      .invoke('val', 25)
      .trigger('change')
      .get('input[type=range]').siblings('p')
      .should('have.text', '25')
    cy.wait(2000)
    cy.get('#scrollable-horizontal').scrollTo('right')
    cy.wait(2000)
    cy.get('#scrollable-vertical').scrollTo(250, 250)
    cy.wait(2000)
    // or you can scroll to a specific percentage
    // of the (width, height) of the element
    cy.get('#scrollable-both').scrollTo('75%', '25%')
    cy.wait(2000)
    // control the easing of the scroll (default is 'swing')
    cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' })
    cy.wait(2000)
    // control the duration of the scroll (in ms)
    cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })
  })

})




