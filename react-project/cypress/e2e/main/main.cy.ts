describe('Just visit e2e test', () => {
  it('should visit main', () => {
    cy.visit('/');
    cy.contains('Main');
  });
  it('should have card', () => {
    cy.visit('/');
    cy.contains('Rick');
  });
});
