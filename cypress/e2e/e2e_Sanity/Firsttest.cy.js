describe('Freshworks portal automation', ()=>{
    it('First Test, Verify url for platform link', ()=>{
        cy.visit('https://www.freshworks.com')
        cy.contains('Platform')
        cy.contains('Platform').click()
        cy.url().should('include','/platform')
    });
})