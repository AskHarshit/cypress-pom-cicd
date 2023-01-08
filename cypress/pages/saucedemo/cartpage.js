class cartPage{

    elements = {
        itemtitle: ()=> cy.get("#item_2_title_link"),
        itemprice: ()=> cy.get(".inventory_item_price"),
        checkout: ()=> cy.get("#checkout"),


    }

    clickCheckout(){
        this.elements.checkout().click()
    }
}

module.exports = new cartPage();


