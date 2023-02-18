//const { expect } = require("chai")
const { describe } = require("mocha");

describe('API testing with Alias', ()=>{
    beforeEach(()=>{
        cy.request('/users?page=2').as('users')
    })
    it('validate the header info', ()=>{
        cy.get('@users')
            .its('headers')
            .its('content-type')
            .should('include','application/json; charset=utf-8')
    })

    it('validate reqres response', ()=>{
        cy.get('@users')
            .then((res)=>{
                expect(res.status).equal(200)
                expect(res.body.data[0]).has.property('email', 'michael.lawson@reqres.in')
                expect(res.body.data[0]).has.property('id',7)
            })
        })
}) 