const { describe } = require("mocha");

describe('Flask hero ki api verification', ()=>{
    it('verify bike price ', ()=>{
        cy.request('https://flask-rest-api-demo.herokuapp.com/product/motorbike')
        .then((res)=>{
            expect(res.status).equal(200)
            expect(res.body.product[0]).has.property('price',599.99)
        })
    })

    it('verify user details ', ()=>{
        cy.request('https://flask-rest-api-demo.herokuapp.com/users')
        .then((res)=>{
            expect(res.status).equal(200)
            expect(res.body.users[0]).has.property('username', 'test_1')
            expect(res.body.users[1]).has.property('username', 'test_2')
            expect(res.body.users[1]).has.property('id', 2)
            expect(res.body.users[1]).has.property('password', 'qwaszx')
        })
    })

    it('verify reqres user details ', ()=>{
        cy.request('GET','https://reqres.in/api/users?page=2')
        .then((res)=>{
            expect(res.status).equal(200)
            expect(res.body.data[0]).has.property('email', 'michael.lawson@reqres.in')
            expect(res.body.data[1]).has.property('first_name', 'Lindsay')
            expect(res.body.data[2]).has.property('last_name', 'Funke')
        })
    })
})