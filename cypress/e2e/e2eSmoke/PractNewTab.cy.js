describe('Cypress important functio practice', ()=>{
    it.skip('very new tab functionality open in same tab',()=>{
        cy.visit('https://www.notion.so/Top-21-Good-Websites-for-Practice-Automation-Testing-885747057cc64a678e983e80fc4d941c')
        //cy.xpath()
        //cy.get('div.notion-page-content div:nth-child(5) div:nth-child(2) div div a').click()
        cy.get('div.notion-page-content div:nth-child(5) div:nth-child(2) div div a')
             .invoke('removeAttr', 'target').click()
        cy.log(cy.url())
    })

    it('Show the menu using invole function ',()=>{
        cy.visit('https://magento.softwaretestingboard.com/')
        //cy.xpath(`//span[text()='Training']`).invoke('show')
        //cy.xpath(`//span[text()='Training']`).trigger('mousehover')
        cy.xpath(`//span[text()='Video Download']`).invoke('show').click({force:true})
        cy.contains('Video Download').click();
    })
})