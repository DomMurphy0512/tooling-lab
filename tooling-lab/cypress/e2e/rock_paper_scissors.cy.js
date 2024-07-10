describe('Rock Paper Scissors Game', () => {
  beforeEach(() => {
  });

  it('types a name, selects a choice, and verifies history log', () => {
    cy.get('input[name="username"]').type('Domenic');

    cy.get('select[name="choice"]').select('rock');

    cy.get('button#submit').click();
    cy.get('#history-log').should('contain', 'Domenic');
    cy.get('#history-log').should('contain', 'rock');

    cy.get('#tries').should('contain', '1');
  });
});
