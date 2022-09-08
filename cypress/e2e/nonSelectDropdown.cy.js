describe('Non Selectable dropdown', ()=>{
    it('Verify values in dropdown', ()=>{
        cy.visit('https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html')
        cy.get('ul.dropdown-menu li a').each(($ele, index, list)=>{
            if($ele.text() === 'JavaScript'){
                cy.log('element found')
                cy.wrap($ele).click({})
                cy.title().should('include','Selenium Practise: Bootstrap Dropdown Example for Selenium')
            } else {
                cy.log('Current value is ', $ele.text())
            }
        })
    })
})