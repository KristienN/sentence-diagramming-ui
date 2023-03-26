describe('Quiz spec', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('/');
    cy.get('[data-cy=navbar]');
    cy.get('[data-cy=landing-buttons]')
      .children()
      .should('have.length', '4');

    // Navigate to the draw page
    cy.get('[data-cy=landing-buttons] > :nth-child(3').click();
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}quiz`);
    cy.intercept('/api/simple').as('testData');
    cy.wait('@testData');
    // cy.get('[data-cy=quiz-bottom-panel]');
  });

  it('should complete the first quiz question', () => {
    // Complete first question
    // Draw structure lines
    cy.get('[data-cy=toolbox]')
      .children()
      .should('have.length', '7');
    cy.get('[data-cy=toolbox] > :nth-child(2)').click();
    cy.get('[data-cy=toolbox] > :nth-child(3)').click();

    // Add modifiers line to subject
    cy.get('#subject-line').click();
    cy.get('[data-cy=toolbox] > :nth-child(4)').click();
    cy.get('[data-cy=toolbox] > :nth-child(4)').click();

    // Add modifier line to predicate
    cy.get('#predicate-line').click();
    cy.get('[data-cy=toolbox] > :nth-child(4)').click();

    // Drag And Drop Words into position
    const dataTransfer = new DataTransfer();

    // Drag Words
    cy.get('[data-cy=sentence-words] > :nth-child(3)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#subject-drop-rect').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(4)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#predicate-drop-rect').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(1)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#modifier-drop-rect-0').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(2)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#modifier-drop-rect-1').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(5)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#modifier-drop-rect-3').trigger('drop', {
      dataTransfer,
    });

    // Check score
    cy.get('[data-cy=quiz-refresh]').click();
    cy.get('[data-cy=quiz-score]').should('have.have.text', 'Score: 10 / 10 ');

    // Check undo
    cy.get('#Undo').click();
    cy.get('#modifier-drop-rect-3').should('not.exist');

    // Check redo
    cy.get('#Undo').click();
    cy.get('#Redo').click();
    cy.get('#modifier-drop-rect-1');

    // Clear Canvas
    cy.get('[data-cy=quiz-clear]').click();

    // check canvas has no elements
    cy.get('[data-cy="quiz-canvas"]')
      .children()
      .should('have.length', '0');
  });

  it('should draw the 5th question', () => {
    // Click next till the last elements
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();

    // Draw Question 5
    // cy.get('[data-cy=quiz-navigation]').should('have.value', '5');

    // Complete first question
    // Draw structure lines
    cy.get('[data-cy=toolbox]')
      .children()
      .should('have.length', '7');
    cy.get('[data-cy=toolbox] > :nth-child(2)').click();
    cy.get('[data-cy=toolbox] > :nth-child(3)').click();

    // Add modifiers line to subject
    cy.get('#subject-line').click();
    cy.get('[data-cy=toolbox] > :nth-child(4)').click();

    // Add preposition line to predicate
    cy.get('#predicate-line').click();
    cy.get('[data-cy=toolbox] > :nth-child(7)').click();

    // Add modifier to preposition
    cy.get('#predicate-preposition-line').click();
    cy.get('[data-cy=toolbox] > :nth-child(4)').click();

    // Drag And Drop Words into position
    const dataTransfer = new DataTransfer();

    // Drag Words
    cy.get('[data-cy=sentence-words] > :nth-child(2)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#subject-drop-rect').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(3)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#predicate-drop-rect').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(1)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#modifier-drop-rect-0').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(4)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#modifier-drop-rect-12').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(6)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#predicate-preposition-drop-rect').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(5)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#modifier-drop-rect-22').trigger('drop', {
      dataTransfer,
    });

    // Check score
    cy.get('[data-cy=quiz-refresh]').click();
    cy.get('[data-cy=quiz-score]').should('have.have.text', 'Score: 10 / 10 ');

    // Check undo
    cy.get('#Undo').click();
    cy.get('#modifier-drop-rect-22').should('not.exist');

    // Check redo
    cy.get('#Undo').click();
    cy.get('#Redo').click();
    cy.get('#modifier-drop-rect-12');

    // Clear Canvas
    cy.get('[data-cy=quiz-clear]').click();

    // check canvas has no elements
    cy.get('[data-cy="quiz-canvas"]')
      .children()
      .should('have.length', '0');
  });

  it('should complete the last question', () => {
    // Click next till the last elements
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();

    cy.get('[data-cy=toolbox]')
      .children()
      .should('have.length', '7');
    cy.get('[data-cy=toolbox] > :nth-child(2)').click();
    cy.get('[data-cy=toolbox] > :nth-child(3)').click();
    cy.get('[data-cy=toolbox] > :nth-child(6)').click();
    // Add modifiers line to subject
    cy.get('#subject-line').click();
    cy.get('[data-cy=toolbox] > :nth-child(4)').click();

    // Add modifier line to predicate
    cy.get('#subject-compliment-line').click();
    cy.get('[data-cy=toolbox] > :nth-child(4)').click();

    // Drag And Drop Words into position
    const dataTransfer = new DataTransfer();

    // Drag Words
    cy.get('[data-cy=sentence-words] > :nth-child(2)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#subject-drop-rect').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(3)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#predicate-drop-rect').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(1)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#modifier-drop-rect-0').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(5)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#modifier-drop-rect-5').trigger('drop', {
      dataTransfer,
    });
    cy.get('[data-cy=sentence-words] > :nth-child(4)').trigger('dragstart', {
      dataTransfer,
    });
    cy.get('#subject-compliment-drop-rect').trigger('drop', {
      dataTransfer,
    });
  });

  it('should complete the quiz', () => {
    // Click next till the last elements
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();
    cy.get('#Next').click();

    // Click Finsih
    cy.get('#Finish').click();
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}thank`);
  });
});
