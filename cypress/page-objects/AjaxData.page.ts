/// <reference types="cypress" />

class AjaxData {
  selectors = {
    ajaxButton: "#ajaxButton",
    contentLabel: "#content",
  };
  clickButton() {
    cy.get(this.selectors.ajaxButton).click();
    cy.get(this.selectors.contentLabel, { timeout: 15000 }).should(
      "have.text",
      "Data loaded with AJAX get request."
    );
  }
}

export default new AjaxData();
