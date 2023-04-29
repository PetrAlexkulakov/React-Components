describe('Just visit e2e test', () => {
  it('should visit main', () => {
    cy.visit('/');
    cy.contains('Main');
  });
  it('should have card', () => {
    cy.visit('/');
    cy.contains('Rick');
  });
  it('should open modal window', () => {
    cy.visit('/');
    cy.contains('Rick').click();
    cy.contains('Gender:');
  });
  it('should search work', () => {
    cy.visit('/');
    cy.get('input').type('Ar').type('{enter}');
    cy.contains('Armagheadon');
  });
});
