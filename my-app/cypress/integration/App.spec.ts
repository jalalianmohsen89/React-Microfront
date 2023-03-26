describe('Navigation', () => {
  it('should navigate to users page', () => {
    cy.visit('/');
    cy.contains('کاربران').click();
    cy.url().should('include', '/users');
  });
});
