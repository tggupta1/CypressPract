describe('different resolutions', ()=>{
    before(()=>{
        console.log('running my tests')
    })

    beforeEach(()=>{
        cy.visit('https://www.google.com')
    })

    it('open in machbook-13', ()=>{
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    });

    it('open in samsung-note9', ()=>{
        cy.viewport('samsung-note9')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in 550 and 750', ()=>{
        cy.viewport(550, 750)
        cy.screenshot()
        cy.wait(200)
    })
})