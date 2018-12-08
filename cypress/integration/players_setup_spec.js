describe('Setup page', function() {
  it('Enters the players names the clicks submit', function() {
    cy.setup()
    cy.url().should('eq', 'http://localhost:3000/placement')
  })
})
