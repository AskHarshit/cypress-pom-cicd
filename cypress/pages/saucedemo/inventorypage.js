class inventoryPage {
    elements = {
        dropdown: ()=> cy.get('.product_sort_container'),
        onesieAddToCart: ()=> cy.get('#add-to-cart-sauce-labs-onesie'),
        carticon: ()=> cy.get("a[class='shopping_cart_link']"),
        
      
    }

    selectDropdown(){
            this.elements.dropdown().select()
    }

    clickOnesieAddToCart(){
        this.elements.onesieAddToCart().click()
    }

    clickCartIcon(){
        this.elements.carticon().click()
    }
}

module.exports = new inventoryPage();