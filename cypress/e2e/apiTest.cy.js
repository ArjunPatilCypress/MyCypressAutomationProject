describe('my first api test',()=>{

it('to test api first approach',()=>{

    cy.request({
        method: 'POST', 
        url: 'https://reqres.in/api/users', 
        body: {
                "name": "morpheus",
                "job": "leader"
        }
      }).then( ({ status }) => {
        
        expect(status).to.eq(201)
      })

})

})