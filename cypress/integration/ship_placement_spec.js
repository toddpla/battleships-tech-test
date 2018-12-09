describe('Ship placement', function() {

  it('Adds a ship to the grid', () => {
    cy.setup()
    cy.get('#ship-Carrier').click()
    cy.get('#square-55').click()
    cy.get('#square-55').should('have.class', 'square-ship')
    cy.get('#square-56').should('have.class', 'square-ship')
    cy.get('#square-57').should('have.class', 'square-ship')
    cy.get('#square-58').should('have.class', 'square-ship')
    cy.get('#square-59').should('have.class', 'square-ship')
  })

  it('Adds ships to the grid for player one and switches to players to', function() {
    cy.setup()
    cy.placeShips()
    cy.get('#current-player-name').contains('James')
  })

  it('Adds ships to the grid for player two and shows player one', () => {
    cy.setup()
    cy.placeShips()
    cy.placeShips()
    cy.get('#current-player-name').contains('Todd')
  })
})
