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
        loginpage.typeUsername(logintestdata.username[3])
        loginpage.typePassword(logintestdata.password)
        loginpage.clickLogin()
        cy.url().should('include', '/inventory.html')
    })


    it('Performance Glitch User Ordering Validation',()=>{
   
            inventoryPage.clickOnesieAddToCart()
            inventoryPage.clickCartIcon()
            cy.url().should('include', '/cart.html')
            cartpage.elements.itemtitle().should('have.text', 'Sauce Labs Onesie')
            cartpage.elements.itemprice().should('have.text', '$7.99')
            cartpage.clickCheckout()
            cy.url().should('include', '/checkout-step-one.html')
            checkoutsteponepage.fillFirstName('Harshit')
            checkoutsteponepage.fillLastName('Bhardwaj')
            checkoutsteponepage.fillPincode('201303')
            checkoutsteponepage.clickContinuebtn()
            // cy.wait(5000)
            cy.url().should('include', '/checkout-step-two.html')
            checkoutsteptwopage.elements.title().should('have.text', 'Checkout: Overview')
            checkoutsteptwopage.elements.cartquantity().should('have.text', '1')
            checkoutsteptwopage.elements.inventoryitemname().should('have.text', 'Sauce Labs Onesie')
            checkoutsteptwopage.elements.inventoryitemprice().should('have.text', '$7.99')
            checkoutsteptwopage.elements.summarylabel().should('have.text', 'SauceCard #31337FREE PONY EXPRESS DELIVERY!')
            checkoutsteptwopage.elements.subtotal().should('have.text', 'Item total: $7.99')
            checkoutsteptwopage.elements.taxlabel().should('have.text', 'Tax: $0.64')
            checkoutsteptwopage.elements.totallabel().should('have.text', 'Total: $8.63')
            checkoutsteptwopage.clickFinish()
            cy.url().should('include', '/checkout-complete.html')
            checkoutcomplete.elements.completionheader().should('have.text', 'THANK YOU FOR YOUR ORDER')
     
     })


    })