/// <reference types="cypress" />

class ProgressBar {
  selectors = {
    startButton: "#startButton",
    stopButton: "#stopButton",
    progressBar: "#progressBar",
  };
  measureProgress(percentage: string) {
    cy.get(this.selectors.startButton).click();
    cy.get(this.selectors.progressBar, { timeout: 10000 })
      .invoke("attr", "aria-valuenow")
      .should("eq", percentage);
    cy.get(this.selectors.stopButton).click();
  }
}

export default new ProgressBar();
