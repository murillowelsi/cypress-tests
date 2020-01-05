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
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("email", () => {
    cy.get("input[placeholder='nome@gmail.com']");
});

Cypress.Commands.add("senha", () => {
    cy.get("input[placeholder=senha]");
});

Cypress.Commands.add('entrar', () => {
    cy.get("#login").click();
});

Cypress.Commands.add("login", data => {
    cy.email().type(data.email);
    cy.senha().type(data.pass);
    cy.entrar();
});

Cypress.Commands.add("loginWithoutEmail", data => {
    cy.senha().type(data.pass);
    cy.entrar();
});

Cypress.Commands.add("loginWithoutPass", data => {
    cy.email().type(data.email);
    cy.entrar();
});

Cypress.Commands.add('logout', () => {
    cy.get(".dropdown").click();
    cy.get('.dropdown-item').contains('Sair').click();
});

Cypress.Commands.add("successLogin", assert => {
    cy.get(".info a span").should('contain', assert.message);
});

Cypress.Commands.add("alertMessage", alert => {
    cy.get(".alert span b").should('contain', alert.message);
});