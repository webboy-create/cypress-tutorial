export class Login {
    loginForm(username, password) {
        cy.get("#user-name").type(username);     // PAGE OBJECT MODEL - TO MAKE THE CODE REUSABLE AND MAINTANABLE
        cy.get("#password").type(password);      // PAGE OBJECT MODEL - IMPLEMENTED TO OPTIMISE TEST AND AVOID CODE DUPLICATION
        cy.get("#login-button").click();
    }
}