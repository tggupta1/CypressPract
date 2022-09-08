describe('Spicejet post testing', ()=>{
    it('verify home page', ()=>{
        cy.visit('https://www.spicejet.com', {failOnStatusCode: false})
        cy.get('[data-testid="search-destination-code"]').click()
        cy.get('[data-testid="auto-cmp-txt"]').type('BLR').pause()
        cy.get('[data-testid="auto-cmp-row-title-0"]').click()
        cy.get('.r-5njf8e > .r-1loqt21 > .css-76zvg2')
        .should('contain','Login')
        .and('have.length',1)
    })

    it('verify spicejet portal details', ()=>{
        cy.visit('https://www.spicejet.com')
        cy.SpicejetTitle('SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets')
        

    })

})