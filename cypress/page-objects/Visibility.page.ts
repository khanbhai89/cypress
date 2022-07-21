/// <reference types="cypress" />

class Visibility {
  selectors = {
    hideButton: "#hideButton",
    removedButton: "#removedButton",
    zeroWidthButton: "#zeroWidthButton",
    overlappedButton: "#overlappedButton",
    transparentButton: "#transparentButton",
    invisibleButton: "#invisibleButton",
    notDisplayedButton: "#notdisplayedButton",
    offscreenButton: "#offscreenButton",
    hidingLayer: "#hidingLayer",
  };
  verifyButtonsVisible() {
    cy.get(this.selectors.removedButton).should("be.visible");
    cy.get(this.selectors.zeroWidthButton).should("be.visible");
    cy.get(this.selectors.overlappedButton).should("be.visible");
    cy.get(this.selectors.transparentButton).should("be.visible");
    cy.get(this.selectors.invisibleButton).should("be.visible");
    cy.get(this.selectors.notDisplayedButton).should("be.visible");
    cy.get(this.selectors.offscreenButton).should("be.visible");
  }
  clickHideButton() {
    cy.get(this.selectors.hideButton).click();
  }
  verifyOverlap() {
    const areOverlapping = (rect1, rect2) => {
      if (rect1.right < rect2.left || rect2.right < rect1.left) {
        return false;
      }
      if (rect1.bottom < rect2.top || rect2.bottom < rect1.top) {
        return false;
      }
      return true;
    };
    const getRectangle = ($el) => $el[0].getBoundingClientRect();
    cy.get(this.selectors.overlappedButton)
      .then(getRectangle)
      .then((rectA) => {
        cy.get(this.selectors.hidingLayer)
          .then(getRectangle)
          .then((rectB) => {
            expect(areOverlapping(rectA, rectB), "A and B are overlapping?").to
              .be.true;
          });
      });
  }
  verifyButtonsNotVisible() {
    cy.get(this.selectors.removedButton).should("not.exist");
    cy.get(this.selectors.zeroWidthButton).should("not.be.visible");
    this.verifyOverlap();
    cy.get(this.selectors.transparentButton).should("not.be.visible");
    cy.get(this.selectors.invisibleButton).should("not.be.visible");
    cy.get(this.selectors.notDisplayedButton).should("not.be.visible");
    cy.get(this.selectors.offscreenButton).should(
      "have.class",
      "btn btn-info offscreen"
    );
  }
}

export default new Visibility();
