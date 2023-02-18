import bookdemo from '../e2e/pageHRM/bookdemo.cy'

describe('verify hrm portal', ()=>{
    const bd = new bookdemo();
    it('First HRM test case', ()=>{
        
        cy.visit('https://www.orangehrm.com/hris-hr-software-demo/')
        bd.enterDetails()
    })
})