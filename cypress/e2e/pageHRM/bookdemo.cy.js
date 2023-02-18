class bookdemo{

    getFullName(){
        return cy.get('input#Form_getForm_FullName')
    }

    getEmail(){
        return cy.get('input#Form_getForm_Email') 
    }

    getCountry(){
        return cy.get('select#Form_getForm_Country')
    }

    getPhoneno(){
        return cy.get('input#Form_getForm_Contact')
    }

    enterDetails(){
        this.getFullName().type('TestName',{force: true})
        this.getEmail().type('test1@gmail.com',{force: true})
        this.getCountry().select('India',{force: true})
        this.getPhoneno().type('991006134',{force: true})
    }

}
export default bookdemo
