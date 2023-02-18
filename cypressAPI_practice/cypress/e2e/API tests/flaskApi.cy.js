describe('Flask API user details', ()=>{
    beforeEach(()=>{
        cy.request('/users').as('users')
    })

    it('verify user details', ()=>{
        cy.get('@users')
            // .its('status')
            // .should('equal',200)
            .then((res)=>{
                expect(res.body.users[0]).has.property('username','test_1')
            })    

    })
})