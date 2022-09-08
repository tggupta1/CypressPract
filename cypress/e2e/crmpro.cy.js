describe('CRM pro testing', ()=>{
    it('verify page title', ()=>{
        cy.visit('https://classic.crmpro.com/')
        console.log('*************************')
        console.log('title is ',cy.title())
        cy.url().should('include','crmpro')
        cy.get('.nav > :nth-child(6) > a').click()
    })
})