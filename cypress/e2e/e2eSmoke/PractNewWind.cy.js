describe('Cypress functions', ()=>{
    xit('Verify new window function', ()=>{
      cy.visit("https://the-internet.herokuapp.com/windows")
      cy.get('.example > a').invoke('removeAttr', 'target').click()
      cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
      cy.go('back');
    })

    xit('Scenario 1', function (){
        // launch url
        cy.visit("https://register.rediff.com/register/register.php");
        // click submit
        cy.get('input[type="submit"]').click();
        // fire event with method on
        cy.on('window:alert',(t)=>{
           //assertions
           expect(t).to.contains('Your full name');
        })
     });

     it("Scenario 1", function () {
        //URL launched
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        //fire confirm browser event and accept
        cy.get(':nth-child(2) > button').click()
        cy.on("window:confirm", (t) => {
           return false;
        });
        cy.wait(2000)
        cy.screenshot('CompletePage')
        cy.get(':nth-child(2) > button').click()
        cy.get(':nth-child(2) > button').screenshot()
        cy.get('#result').should('have.text','You clicked: Cancel')
     });
});