import {signup} from "../fixtures/selectors.js"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Konga Testing', () => {

beforeEach(() => {

    cy.visit('https://www.konga.com/')

})

  it('should be able to signup', () => {
    cy.get(signup.signupBtn).click()
    cy.get(signup.donthaveAccBtn).click()
    cy.get(signup.firstNameField).type('Samuel')
    cy.get(signup.lastNameField).type('Emeka')
    cy.get(signup.emailField).type('ntus@yopmail.com')
    cy.get(signup.phoneNumber).type('08165181891')
    cy.get(signup.password).type('samuel1234')
    cy.get(signup.createAccBtn).click()
    cy.get(signup.pin).type('6420')







  })
})