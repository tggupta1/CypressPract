const cyView = require("cy-view");
const devices = [
    {
        model: "desktop",
        width: 1280,
        height: 800
    },
    {
        model: "mobile simulator",
        width: 375,
        height: 667
    }
];
const urls = [
    "http://angularjs.realworld.io/#/"
];
const conduitTests = cyView(devices);

conduitTests(urls, ()=>{
    describe('Conduit application test cases', ()=>{
        //#1
        xit('verify login functionality with correct username and password', ()=>{
            cy.get('a.nav-link[href="#/login"]').click()
            cy.title().should('equal','Sign in — Conduit')
            cy.get('input.ng-valid-email').type('shivanigoel1709@gmail.com')
            cy.get(`input.ng-pristine[type='password']`).type('password123')
            cy.get('button.btn').click()
            cy.get("ul.pull-xs-right[show-authed='true'] li.nav-item:nth-of-type(4) a").
                should('contain','shivanigoel1709')
        })
        //#2
        xit('verify login functionality with incorrect username', ()=>{
            cy.get('a.nav-link[href="#/login"]').click()
            cy.title().should('equal','Sign in — Conduit')
            cy.get('input.ng-valid-email').type('shivanigoel@gmail.com')
            cy.get(`input.ng-pristine[type='password']`).type('password123')
            cy.get('button.btn').click()
            cy.get(`li.ng-scope[ng-repeat='error in errors']`).
                should('contain','email or password is invalid')
        })
        //#3
        xit('verify login functionality with incorrect password', ()=>{
            cy.get('a.nav-link[href="#/login"]').click()
            cy.title().should('equal','Sign in — Conduit')
            cy.get('input.ng-valid-email').type('shivanigoel@gmail.com')
            cy.get(`input.ng-pristine[type='password']`).type('password125')
            cy.get('button.btn').click()
            cy.get(`li.ng-scope[ng-repeat='error in errors']`).
                should('contain','email or password is invalid')
        })
        //#4
        xit('verify login functionality with blank password', ()=>{
            cy.get('a.nav-link[href="#/login"]').click()
            cy.title().should('equal','Sign in — Conduit')
            cy.get('input.ng-valid-email').type('shivanigoel@gmail.com')
            //cy.get(`input.ng-pristine[type='password']`).type('password125')
            cy.get('button.btn').click()
            cy.get(`li.ng-scope[ng-repeat='error in errors']`).
                should('contain',`password can't be blank`)
        })
        //#5
        xit('verify login functionality with blank username and password', ()=>{
            cy.get('a.nav-link[href="#/login"]').click()
            cy.title().should('equal','Sign in — Conduit')
            // cy.get('input.ng-valid-email')
            // cy.get(`input.ng-pristine[type='password']`)
            cy.get('button.btn').click()
            cy.get(`li.ng-scope[ng-repeat='error in errors']`).
                should('contain',`email can't be blank`)
        })
        //#6
        xit('verify login functionality with blank username and password', ()=>{
            cy.get('a.nav-link[href="#/login"]').click()
            cy.title().should('equal','Sign in — Conduit')
            cy.get('button.btn').click()
            cy.get(`li.ng-scope[ng-repeat='error in errors']`).
                should('contain',`email can't be blank`)
        })
        //#7
        it('verify login functionality without @ in username', ()=>{
            cy.get('a.nav-link[href="#/login"]').click()
            cy.title().should('equal','Sign in — Conduit')
            cy.get('input.ng-valid-email').type('shivanigoelgmail.com')
            cy.get(`input.ng-pristine[type='password']`).type('password123')
            cy.get('button.btn').click()
            cy.get('input.ng-valid-email').then(($input) => {
            expect($input[0].validationMessage).to.eq('Please include an \'@\' in the email address. \'thisismyemail\' is missing an \'@\'.');
        })


        //we can club the functionality in a single test case
        xit('verify settings festure', ()=>{
            cy.get('a.nav-link[href="#/login"]').click()
            cy.title().should('equal','Sign in — Conduit')
            cy.get('input.ng-valid-email').type('shivanigoel1709@gmail.com')
            cy.get(`input.ng-pristine[type='password']`).type('password123')
            cy.get('button.btn').click()
            cy.get("ul.pull-xs-right[show-authed='true'] li.nav-item:nth-of-type(4) a").
                should('contain','shivanigoel1709')
            cy.get(`a.nav-link[ui-sref='app.settings']`).click()
            cy.title().should('equal','Settings — Conduit')
            cy.get(`input.form-control[placeholder='URL of profile picture']`).
                invoke('val').should('contain', "smiley-cyrus.jpeg");     
            cy.get(`input.form-control[placeholder='Username']`).invoke('val').
                should('contain','shivanigoel1709')
            cy.get('textarea.form-control').type('Hi there, this is Shivani')
            cy.get(`input.form-control[type='email']`).invoke('val').
                should('contain','shivanigoel1709@gmail.com')
            cy.get('button.btn-lg').should('be.visible')
        })
    })

})