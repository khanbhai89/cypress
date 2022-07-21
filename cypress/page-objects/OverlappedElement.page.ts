/// <reference types="cypress" />

class Overlapped {
  selectors = {
    nameField: "#name",
    frame: "div.container > div > div:nth-child(1)",
  };
  inputName(name: string) {
    cy.get(this.selectors.frame).scrollTo("bottom");
    cy.get(this.selectors.nameField).type(name);
    cy.get(this.selectors.nameField).should("have.value", name);
  }
}

export default new Overlapped();
