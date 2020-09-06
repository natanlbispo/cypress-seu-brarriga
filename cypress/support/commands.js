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


Cypress.Commands.add("makeRequest", (baseUrl, methods, route, body, code) =>{
    cy.request(
        {
            method: methods,
            url: baseUrl+route,
            failOnStatusCode: false,
            body: body
        }).then(response => {
            expect(response.status).to.eq(code)
            if(code ===400){
                console.log(response);
                expect(response.body.error).to.be.eq("Problemas com o login do usuário");
            }
        
        });
});