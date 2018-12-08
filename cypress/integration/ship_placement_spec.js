describe('Ship placement', function() {
  it('Adds a ship to the grid', function() {
    cy.setup()
    cy.get('#ship-Destroyer').click()
    cy.get('#square-0').click()
    cy.get('#square-0').should('contain', 'X')
  })
})
