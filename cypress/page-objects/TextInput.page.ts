/// <reference types="cypress" />

class TextInput {
  selectors = {
    newButtonNameField: "#newButtonName",
    updatingButton: "#updatingButton",
  };
  buttonChange(name: string) {
    cy.get(this.selectors.newButtonNameField).type(name);
    cy.get(this.selectors.updatingButton).click();
    cy.get(this.selectors.updatingButton).should("have.text", name);
  }
}

export default new TextInput();
