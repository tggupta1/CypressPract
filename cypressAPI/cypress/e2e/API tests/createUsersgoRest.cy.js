///<reference types = "Cypress" />

describe('GoRest APIs validation', () => {

    it('Verify User is able to Create new Uers', () => {
        let token = '1b903c1be98e45cebe0cf5514d218dd7d14f7119c0a38ad0266b5e6b65042691'
        const datajson = require('../../fixtures/user.json')
        let pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        let randomText
        let testEmail
        let userid
        for (let i = 0; i < 10; i++)
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length))
        testEmail = randomText + '@gmail.com'
        cy.fixture('user.json').then((payload) => {
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in//public/v2/users',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                body: {
                    "name": payload.name,
                    "email": testEmail,
                    "gender": datajson.gender,
                    "status": datajson.status
                }
            }).then((res) => {
                cy.log(JSON.stringify(res))
                userid = res.body.id
                cy.log('******************'+userid)
                expect(res.status).to.eq(201)
                expect(res.body).has.property('name', datajson.name)

            }).then((res) => {
                //const userid = res.body.id
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/' + userid,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                }).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).has.property('name', datajson.name)
                })
            })
        })
    })

})