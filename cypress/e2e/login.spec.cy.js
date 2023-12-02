import { Login } from "../page-object/Login";

describe('Login Module', () => {
  const login = new Login();

  beforeEach(() => {           // Hooks - beforeEach runs before each of the tests run
    cy.visit('/');             // Hooks - beforeAll runs once before all the test runs
  });

  it('login as standard user', () => {
    login.loginForm("standard_user", "secret_sauce");
    cy.get(".shopping_cart_link").should('be.visible');     //Assertion OR Validations
  });


  it('login as locked out user', () => {
    login.loginForm("locked_out_user", "secret_sauce");
    cy.get('[data-test="error"]').should("be.visible").and("have.text", "Epic sadface: Sorry, this user has been locked out.")
    // cy.get('[data-test="error"]').should("be.visible")
    // cy.get('[data-test="error"]').should("have.text", "Epic sadface: Sorry, this user has been locked out.")
  });


  it('login as problem_user', () => {
    login.loginForm("problem_user", "secret_sauce");
  });


})