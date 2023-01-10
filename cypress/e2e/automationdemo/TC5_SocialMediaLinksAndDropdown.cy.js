/// <reference types="Cypress" />

const logintestdata = require('../../fixtures/saucedemo_users')

import loginpage from '../../pages/saucedemo/loginpage'
import inventoryPage from '../../pages/saucedemo/inventoryPage'
import cartpage from '../../pages/saucedemo/cartpage'
import checkoutsteponepage from '../../pages/saucedemo/checkoutsteponepage'
import checkoutsteptwopage from '../../pages/saucedemo/checkoutsteptwopage'
import checkoutcomplete from '../../pages/saucedemo/checkoutcomplete'

describe('POM Implementation', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')  
        loginpage.typeUsername(logintestdata.username[0])
        loginpage.typePassword(logintestdata.password)
        loginpage.clickLogin()
        cy.url().should('include', '/inventory.html')
    })

    it('validating footer text and social media links', ()=>{

        inventoryPage.elements.twitter().should('have.text', 'Twitter')
        inventoryPage.elements.facebook().should('have.text', 'Facebook')
        inventoryPage.elements.linkedin().should('have.text', 'LinkedIn')
        inventoryPage.elements.footertext().should('have.text', '© 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')

        
    })

    it('validating dropdown', ()=>{

        inventoryPage.elements.dropdown().as('dropdown').select('Price (low to high)')
        cy.get('@dropdown').should('have.value', 'lohi')
        inventoryPage.elements.priceofproduct1().should('have.text', '$7.99')
        inventoryPage.elements.priceofproduct2().should('have.text', '$9.99')
        inventoryPage.elements.priceofproduct3().should('have.text', '$15.99')
        inventoryPage.elements.priceofproduct4().should('have.text', '$15.99')
        inventoryPage.elements.priceofproduct5().should('have.text', '$29.99')
        inventoryPage.elements.priceofproduct6().should('have.text', '$49.99')
    })


})

