/// <reference types="cypress" />

class Home {
  selectors = {
    homeURL: "http://uitestingplayground.com/",
    pageElements: "#overview > div > div.row > div",
  };
  open() {
    cy.visit(this.selectors.homeURL);
  }

  getElement(name: string) {
    cy.contains(name).click();
  }
}

export default new Home();
