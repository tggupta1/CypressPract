describe('Verify gorest user details', ()=>{
    it('verify name and email', ()=>{
        cy.request('https://gorest.co.in/public-api/users').then((res)=>{
            expect(res.body.data[0]).has.property('name','Prof. Dhatri Dwivedi')
           // expect(res.body.meta.pagination).has.property('total',3030)
            expect(res.body).has.property('code',200)
        })

    })
})