class checkoutStepTwo{

    elements = {
        title: ()=> cy.get(".title"),
        cartquantity: ()=> cy.get(".cart_quantity"),
        inventoryitemname: ()=> cy.get(".inventory_item_name"),
        inventoryitemprice: ()=> cy.get(".inventory_item_price"),
        summarylabel: ()=> cy.get("div[class='summary_value_label']"),
        subtotal: ()=> cy.get(".summary_subtotal_label"),
        taxlabel: ()=> cy.get(".summary_tax_label"),
        totallabel: ()=>  cy.get(".summary_total_label"),
        finish: ()=> cy.get("#finish"),
        
    }

    
    clickFinish(){
        this.elements.finish().click()
    }
}

module.exports = new checkoutStepTwo();


