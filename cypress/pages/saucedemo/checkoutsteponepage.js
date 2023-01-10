class checkoutStepOne{

    elements = {
        firstname: ()=> cy.get("#first-name"),
        lastname: ()=> cy.get("#last-name"),
        pincode: ()=> cy.get("#postal-code"),
        continuebtn: ()=> cy.get("#continue"),
        errorMessage: ()=> cy.get("h3[data-test='error']"),


    }
    
    fillFirstName(firstname){
        this.elements.firstname().type(firstname)
    }

    fillLastName(lastname){
        this.elements.lastname().type(lastname)
    }

    fillPincode(pincode){
        this.elements.pincode().type(pincode)
    }
    
    clickContinuebtn(continuebtn){
        this.elements.continuebtn().click()
    }


}

module.exports = new checkoutStepOne();


