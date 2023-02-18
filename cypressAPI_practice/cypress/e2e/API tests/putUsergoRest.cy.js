describe('Post and Put request', () => {
    it('verify user details updation', () => {
        const datajson = '../../fixtures/user.json'
        const token = '219bdc0dfd012881f049dec6f4cd61f5ab16836bc149d4c7cdd65a7135791768'
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
                    Authorization: 'Bearer ' + token
                },
                body: {
                    "name": payload.name,
                    "email": testEmail,
                    "gender": payload.gender,
                    "status": payload.status
                }
            }).then((res)=>{
                cy.log(JSON.stringify(res))
                userid = res.body.id
                cy.log('************** '+userid)
            }).then((res)=>{
                cy.log('**$$$$$$$$$*** '+userid)
                cy.request({
                    method:'PUT',
                    url:'https://gorest.co.in//public/v2/users/'+userid,
                    headers: {
                        Authorization: 'Bearer ' + token
                    },
                    body: {
                        "name": payload.name+'tg',
                        "email": testEmail,
                        "gender": payload.gender,
                        "status": payload.status
                    }   
                }).then((res)=>{
                    cy.log(JSON.stringify(res.body.name))
                })
            })
        })
    })
})