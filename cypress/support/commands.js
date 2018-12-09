// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('setup', () => {
  cy.visit('http://localhost:3000')
  cy.get('#player_one_name').type('Todd')
  cy.get('#player_two_name').type('James')
  cy.get('form').submit()
})

Cypress.Commands.add('placeShips', () => {
  cy.get('#ship-Carrier').click()
  cy.get('#placement-square-55').click()
  cy.get('#ship-Battleship').click()
  cy.get('#placement-square-10').click()
  cy.get('#ship-Cruiser').click()
  cy.get('#direction-toggle').click()
  cy.get('#placement-square-20').click()
  cy.get('#ship-Submarine').click()
  cy.get('#placement-square-61').click()
  cy.get('#ship-Destroyer').click()
  cy.get('#placement-square-89').click()
})
