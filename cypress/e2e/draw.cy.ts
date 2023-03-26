describe('Drawing spec', () => {
  before(() => {
    cy.viewport('macbook-15');
    cy.visit('/');
    cy.get('[data-cy=navbar]');
    cy.get('[data-cy=landing-buttons]')
      .children()
      .should('have.length', '4');
  });

  it('should complete draw functions on draw page', () => {
    // Navigate to the draw page
    cy.get('[data-cy=landing-buttons] > :nth-child(2').click();
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}draw`);

    // Enter a sentence into the input field
    cy.get('[data-cy=user-sentence-input]').type('He swiftly goes there');
    cy.get('[data-cy=user-sentence-confirm]').click();

    // Draw structure lines
    cy.get('[data-cy=toolbox]')
      .children()
      .should('have.length', '7');
    cy.get('[data-cy=toolbox] > :nth-child(2)').click();
    cy.get('[data-cy=toolbox] > :nth-child(3)').click();
    cy.get('[data-cy=toolbox] > :nth-child(5)').click();

    // Add modifier line
    cy.get('#predicate-line').click();
    cy.get('[data-cy=toolbox] > :nth-child(4)').click();

    // Drag And Drop Words into position
    const dataTransfer = new DataTransfer();

    // Drag Words
    cy.get('[data-cy=user-sentence-words] > :nth-child(1)').trigger('dragstart', {
      dataTransfer,
    });

    cy.get('#subject-drop-rect').trigger('drop', {
      dataTransfer,
    });

    cy.get('[data-cy=user-sentence-words] > :nth-child(3)').trigger('dragstart', {
      dataTransfer,
    });

    cy.get('#predicate-drop-rect').trigger('drop', {
      dataTransfer,
    });

    cy.get('[data-cy=user-sentence-words] > :nth-child(4)').trigger('dragstart', {
      dataTransfer,
    });

    cy.get('#object-drop-rect').trigger('drop', {
      dataTransfer,
    });

    cy.get('[data-cy=user-sentence-words] > :nth-child(2)').trigger('dragstart', {
      dataTransfer,
    });

    cy.get('#modifier-drop-rect-3').trigger('drop', {
      dataTransfer,
    });

    // Clear Canvas
    cy.get('[data-cy=draw-clear]').click();

    // check canvas has no elements
    cy.get('[data-cy="draw-canvas"]')
      .children()
      .should('have.length', '0');

    // Remove Sentence
    cy.get('[data-cy=user-sentence-remove]').click();
    cy.get('[data-cy=user-sentence-words]')
      .children()
      .should('have.length', '0');
  });
});
