/// <reference types="cypress" />

describe('Check https://api.publicapis.org/entries request', () => {
  it('Get 200 status', () => {
    cy.request({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/`,
    }).as('getEntries');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cy.get('@getEntries').should((response: any) => {
      expect(response.status).to.eq(200);
    });
  });
});