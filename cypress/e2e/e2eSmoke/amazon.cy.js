describe('Amazon Portal Testing', ()=>{
    xit('verify search in amazon',()=>{
        cy.visit('https://www.amazon.in')
        cy.get('div.nav-search-field').within(()=>{
            cy.get('input#twotabsearchtextbox').type('Apple Mac Book')
        })
    })

    it('Scenario 1', function (){
        //cy.visit("https://www.amazon.com/");
        cy.visit(Cypress.env('url'))
        cy.get('#nav-flyout-ya-signin').invoke('show');
        cy.contains('Sign').click();
     });
})