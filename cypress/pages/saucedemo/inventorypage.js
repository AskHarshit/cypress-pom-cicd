class inventoryPage {
    elements = {
        dropdown: ()=> cy.get('.product_sort_container'),
        onesieAddToCart: ()=> cy.get('#add-to-cart-sauce-labs-onesie'),
        carticon: ()=> cy.get("a[class='shopping_cart_link']"),
        twitter: () => cy.get("a[href='https://twitter.com/saucelabs']"),
        facebook: () => cy.get("a[href='https://www.facebook.com/saucelabs']"),
        linkedin: () => cy.get("a[href='https://www.linkedin.com/company/sauce-labs/']"),
        dropdown: () => cy.get(".product_sort_container"),
        priceofproduct1: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"),
        priceofproduct2: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"),
        priceofproduct3: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"),
        priceofproduct4: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"),
        priceofproduct5: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"),
        priceofproduct6: () => cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)"),
        footertext: () => cy.get(".footer_copy"),
      
    }
    
    clickOnesieAddToCart(){
        this.elements.onesieAddToCart().click()
    }

    clickCartIcon(){
        this.elements.carticon().click()
    }
}

module.exports = new inventoryPage();