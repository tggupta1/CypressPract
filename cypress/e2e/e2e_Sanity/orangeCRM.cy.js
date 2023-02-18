describe('Orange HRM Test Cases', ()=>{

    // it('verify google search autocomplete', ()=>{
    //     cy.visit('https://www.google.com/')
    //     cy.get(`[name='q']`).type('cypress')
        
    //     cy.get('div.aajZCb')
    //     .find('li span')
    //     .contains('cypress plant')
    //     .click({force:true})
    // })

    // it('verfiy drop down', ()=>{
    //     cy.visit('https://www.orangehrm.com/hris-hr-software-demo/')
    //     cy.get('select.dropdown').scrollIntoView().select('India', {force:true}).should('have.value','India')
    // })

    // it('verfiy drop down', ()=>{
    //     cy.visit('https://www.orangehrm.com/')
    //     //cy.get('li:nth-of-type(1) a.nav-link-hed').trigger('mouseover')
    //     cy.get('li:nth-of-type(1) a.nav-link-hed').trigger('mousedown')
    //     cy.wait(3000)
    //     cy.get('li:nth-of-type(2) a.nav-link-hed').trigger('mouseenter')
    //     console.log(cy.title())

    // })

    it.skip('verify Lambda test ', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('a.ajax_add_to_cart_button').first().click()
        cy.wait(4000)
        cy.get('span.cross').click()
        cy.wait(4000)
        cy.get('div.shopping_cart b').trigger('mouseover').invoke('show')
        cy.wait(4000)
    })

    it.skip('verify checkbox ', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        //cy.xpath('//a[@title="Women"]').click()
        cy.wait(3000)
        cy.get('input.checkbox').first().click()

    })

    it.skip('verify file upload',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#contact-link a').click()
        cy.get('input#fileUpload').attachFile('Looking for.jpg')
        cy.wait(9000)

    })

    xit('Verify multiple uploads',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1 = 'Looking_for.jpg';
        const path2 = 'bg-books-short.jpg';
       // cy.get('input#filesToUpload').attachFile('Looking for.jpg').attachFile('bg-books-short.jpg')
      //  cy.get('input#filesToUpload').attachFile(path1).attachFile(path2);
      cy.get('input#filesToUpload').attachFile([path1, path2]);
        cy.wait(6000)
        //cy.get('ul#fileList li').first().should('contain.text','Looking for.jpg')
        //cy.get('ul#fileList li').last().should('contain.text','bg-books-short.jpg')
    })

    it('verfiy searchbox', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        //cy.get('input#search_query_top').type('dress')
        cy.xpath(`//input[@id='search_query_top']`).type('dress')
        cy.get('button.button-search').click()
        //cy.get('span.lighter').contains()
        cy.contains('span.lighter','dress')
    })

})