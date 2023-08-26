//const cypress = require("cypress")
import 'cypress-iframe'

describe('MyFrametest',()=>{

    it('Iframe test',()=>{
       cy.log('Ganesh ') 
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').type('{selectAll}').type('{del}').type('Ganesh Ganesh Morya');
    })

})