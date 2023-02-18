describe('Amazon Portal Testing', ()=>{
    xit('verify search in amazon',()=>{
        cy.visit("/")
        cy.get('div.nav-search-field').within(()=>{
            cy.get('input#twotabsearchtextbox').type('Apple Mac Book')
        })
    })
///sample code
//2nd commit
    //3rd commit from Git
    it('Scenario 1', function (){
        cy.visit("https://www.amazon.com/");
        //cy.visit(Cypress.env('url'))
        cy.get('#nav-flyout-ya-signin').invoke('show');
        cy.contains('Sign').click();
     });
})
