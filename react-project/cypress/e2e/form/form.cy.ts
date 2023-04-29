describe('Just visit e2e test', () => {
  it('should visit form', () => {
    cy.visit('/forms');
    cy.contains('Forms');
  });
});
