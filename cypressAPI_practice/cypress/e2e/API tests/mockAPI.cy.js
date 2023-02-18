describe('Mock API practice from JsonPlaceholder typicode', ()=>{
    it('verify api results', ()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/posts', {totalPosts:5}).as('posts')
        cy.get(`table:nth-of-type(1) a[href='/posts']`).click()
        cy.wait('@posts')
    })
})