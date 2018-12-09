describe('placing a strike', () => {
  it('should place a strike in an empty square and switch players', () => {
    cy.setup()
    cy.placeShips()
    cy.placeShips()
    cy.get('#opponent-square-0').click()
    cy.get('#opponent-square-0').should('have.class', 'square-strike')
    cy.wait(550)
    cy.get('#current-player-name').contains('James')
  })

})
