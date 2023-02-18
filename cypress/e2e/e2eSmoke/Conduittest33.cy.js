
describe('Conduit application test cases', ()=>{
    
    it('verify login functionality with incorrect password', ()=>{
        cy.visit('http://angularjs.realworld.io/#/')
        cy.get('a.nav-link[href="#/login"]').click()
        cy.title().should('equal', 'Sign in — Conduit')
        cy.get('input.ng-valid-email').type('shivanigoel1709@gmail.com')
        cy.get(`input.ng-pristine[type='password']`).type('password123')
        cy.get('button.btn').click()
        cy.get("ul.pull-xs-right[show-authed='true'] li.nav-item:nth-of-type(4) a").
            should('contain', 'shivanigoel1709')
        cy.get(`a.nav-link[ui-sref='app.settings']`).click()
        cy.title().should('equal', 'Settings — Conduit')
        cy.get(`a.nav-link[ui-sref='app.settings']`).click()
        cy.title().should('equal', 'Settings — Conduit')
        cy.get(`input.form-control[placeholder='Username']`).clear() 
        cy.get(`input.form-control[placeholder='Username']`).focus().clear();
        cy.get(`input.form-control[placeholder='Username']`).invoke('val', '');
        
    })
})