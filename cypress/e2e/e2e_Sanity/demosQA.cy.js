describe('Cypress Practice', ()=>{
    xit('verify demoQA portal title', ()=>{
        cy.visit('/')
        cy.title().should('equal','ToolsQA')
    })

    it('Verify Book store application', ()=>{
        cy.visit('/')
        cy.get('div.category-cards div:nth-of-type(6) h5')
        .should('contain.text','Book Store Application')
        .click()
        cy.get('div.rt-tbody div a').should('have.length',8)
        cy.get('div.rt-tbody div a').each(($ele, index, list)=>{
            cy.log($ele.text())
            if($ele.text()===('Speaking JavaScript')){
                cy.wrap($ele).click()
            }
        })
    })
})