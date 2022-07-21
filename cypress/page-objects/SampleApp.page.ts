/// <reference types="cypress" />

class SampleApp {
  selectors = {
    usernameField: 'input[name="UserName"]',
    passwordField: 'input[name="Password"]',
    loginButton: "#login",
  };
  login(name: string, password: string) {
    cy.get(this.selectors.usernameField).type(name);
    cy.get(this.selectors.passwordField).type(password);
    cy.get(this.selectors.loginButton).click();
  }
}

export default new SampleApp();
