/// <reference types="cypress" />

class Click {
  selectors = {
    button: "#badButton",
    defaultButtonClass: "btn btn-primary",
    successButtonClass: "btn btn-success",
  };
  clickButton() {
    cy.get(this.selectors.button).should(
      "have.attr",
      "class",
      this.selectors.defaultButtonClass
    );
    cy.get(this.selectors.button).click();
    cy.get(this.selectors.button).should(
      "have.attr",
      "class",
      this.selectors.successButtonClass
    );
  }
}

export default new Click();
