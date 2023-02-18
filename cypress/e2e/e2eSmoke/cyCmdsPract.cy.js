describe('Learn Cypress Commands', ()=>{
    it('Pract Wrap Cmd',()=>{
        let fruits=['apple','mango','orange','kiwi','pineapple','grapes']
        cy.wrap(fruits).should('contain','mango')
    });

    it('Count total',()=>{
        let fruits=(a,b,c)=>{
            return a+b+c;
        };
        cy.wrap({fcount:fruits})
            .invoke('fcount',2,4,1)
            .should('be.greaterThan',2)
    })
})