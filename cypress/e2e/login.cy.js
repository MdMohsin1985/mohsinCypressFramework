describe('Login Flow', () => {
  it('should login successfully with valid credentials', () => {
    cy.visit('https://www.github.com/');
    cy.get('.HeaderMenu-link--sign-in ').click({force: true});
    cy.log('Password is:', Cypress.env('password'));

    cy.get('[id="login_field"]').type('mdmohsin1985');
    cy.get('[id="password"]').type(Cypress.env('password'));
    cy.get('js-sign-in-button').click();
    cy.url().should('include', '/MdMohsin1985');
  });
});
