describe('Login Flow', () => {
  it('should login successfully with valid credentials', () => {
    cy.visit('https://www.apsrtconline.in/');
    cy.get("[id='bookingsForm'] [id='home-bot'] ul li").eq(0).click();
    cy.get(".ui-state-active").click();
    cy.get(".chkavailabilityBtn").click();
    cy.log("Password is:", Cypress.env('password'));

  });
});
