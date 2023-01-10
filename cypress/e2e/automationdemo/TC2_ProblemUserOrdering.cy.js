/// <reference types="Cypress" />

const logintestdata = require('../../fixtures/saucedemo_users')

import loginpage from '../../pages/saucedemo/loginpage'
import inventoryPage from '../../pages/saucedemo/inventoryPage'
import cartpage from '../../pages/saucedemo/cartpage'
import checkoutsteponepage from '../../pages/saucedemo/checkoutsteponepage'
import checkoutsteptwopage from '../../pages/saucedemo/checkoutsteptwopage'
import checkoutcomplete from '../../pages/saucedemo/checkoutcomplete'

describe('POM Implementation', () => {
    
    before(() => {
        cy.visit('https://www.saucedemo.com/')  
        loginpage.typeUsername(logintestdata.username[2])
        loginpage.typePassword(logintestdata.password)
        loginpage.clickLogin()
        cy.url().should('include', '/inventory.html')
    })

    it('Problem User Validation', ()=>{
        
        inventoryPage.clickOnesieAddToCart()
       inventoryPage.clickCartIcon()
       cy.url().should('include', '/cart.html')
       cartpage.elements.itemtitle().should('have.text', 'Sauce Labs Onesie')
       cartpage.elements.itemprice().should('have.text', '$7.99')
       cartpage.clickCheckout()
       cy.url().should('include', '/checkout-step-one.html')
       checkoutsteponepage.fillFirstName('Harshit')
       checkoutsteponepage.fillLastName('Bhardwaj')
       checkoutsteponepage.elements.firstname().should('have.value', 'j')
       checkoutsteponepage.fillPincode('201301')
       checkoutsteponepage.clickContinuebtn()
       checkoutsteponepage.elements.errorMessage()

    })


})