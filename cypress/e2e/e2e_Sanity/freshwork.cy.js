describe('Freshworks portal', ()=>{
    it('verify the footer links', ()=>{
        cy.visit('https://www.freshworks.com')
        cy.get("ul.footer-nav>li").
            should("have.length",24)
    })
})