import {signup, signin} from "../fixtures/selectors.js"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


describe('Konga Testing', () => {

beforeEach(() => {

    cy.visit('/')

})

  it.skip('should be able to signup', () => {
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



describe('Konga Signin Testing', () => {

    beforeEach(() => {
    
        cy.visit('/')
    
    })
    
      it.skip('should not be able to signin with an invalid email', () => {
        //User shouldn't sign in with a valid password and an invalid email
        cy.get(signin.signInBtn).click()
        cy.get(signin.emailField).type('samkpas@gmail.com')   
        cy.get(signin.passwordField).type('samuel1234')
        cy.get(signin.loginBtn).click()
      })
    
      it.skip('should not be able to sign in with an incorrect password', ()=>{
        //User shouldn't sign in with a valid email and an incorrect password
        cy.get(signin.signInBtn).click()
        cy.get(signin.emailField).type('ntus@yopmail.com')   
        cy.get(signin.passwordField).type('samuel3465')
        cy.get(signin.loginBtn).click()
        
      })
    
      it.only("User should be able to signin with a valid email and password", ()=>{
        //User should be able to sign in with a valid email and password
        cy.get(signin.signInBtn).click()
        cy.get(signin.emailField).type('ntus@yopmail.com')   
        cy.get(signin.passwordField).type('samuel1234')
        cy.get(signin.loginBtn).click()
    
    
      })
    
    })