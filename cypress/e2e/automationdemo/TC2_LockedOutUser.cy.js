/// <reference types="Cypress" />

const logintestdata = require('../../fixtures/saucedemo_users')

import loginpage from '../../pages/saucedemo/loginpage'

describe('POM Implementation', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')  

        it('Locaked-Out User Validation', ()=>{
            loginpage.typeUsername(logintestdata.username[1])
            loginpage.typePassword(logintestdata.password)
            loginpage.clickLogin()
            loginpage.elements.lockedoutusermessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
            
        })
        
    })

})