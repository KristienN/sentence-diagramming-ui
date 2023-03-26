describe('Learn page spec', () => {
  before(() => {
    cy.viewport('macbook-15');
    cy.visit('/');
    cy.get('[data-cy=navbar]');
    cy.get('[data-cy=landing-buttons]')
      .children()
      .should('have.length', '4');

    // Navigate to the draw page
    cy.get('[data-cy=landing-buttons] > :nth-child(1').click();
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}learn`);
    // cy.get('[data-cy=quiz-bottom-panel]');
  });

  it('press top row buttons on RoboGram', () => {
    // First button
    cy.get('[data-cy=learn-top-buttons] > :nth-child(1)').click();
    cy.wait(10000);
    cy.get('#learn-question');
    cy.get('[data-cy=learn-answer]');

    // Second button
    cy.get('[data-cy=learn-top-buttons] > :nth-child(2)').click();
    cy.wait(10000);
    cy.get('#learn-question');
    cy.get('[data-cy=learn-answer]');

    // Thrid button
    cy.get('[data-cy=learn-top-buttons] > :nth-child(3)').click();
    cy.wait(10000);
    cy.get('#learn-question');
    cy.get('[data-cy=learn-answer]');
  });

  it('press bottom row button on RoboGram', () => {
    // First button
    cy.get('[data-cy=learn-bottom-buttons] > :nth-child(1)').click();
    cy.wait(10000);
    cy.get('#learn-question');
    cy.get('[data-cy=learn-answer]');

    // Two button
    cy.get('[data-cy=learn-bottom-buttons] > :nth-child(2)').click();
    cy.wait(10000);
    cy.get('#learn-question');
    cy.get('[data-cy=learn-answer]');

    // Third button
    cy.get('[data-cy=learn-bottom-buttons] > :nth-child(3)').click();
    cy.wait(10000);
    cy.get('#learn-question');
    cy.get('[data-cy=learn-answer]');

    // Fourth button
    cy.get('[data-cy=learn-bottom-buttons] > :nth-child(4)').click();
    cy.wait(10000);
    cy.get('#learn-question');
    cy.get('[data-cy=learn-answer]');
  });
});
