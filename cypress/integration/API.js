import faker from "faker-br";

const name = faker.name.findName();
const email = faker.internet.email();
const senha = faker.internet.password();
const  baseUrl ="https://barrigarest.wcaquino.me"


describe("Testes API Plataforma Seu Barriga", () => {
    
    it("Realizar Login com usuário não cadstrado", () => {
        cy.fixture('user2').then( body => {
            body.name=name;
            body.email=email;
            body.senha=senha;
            cy.makeRequest(baseUrl,"POST", "/signin", body,400);
        })
    });

    it("Cadastro de um usuário ", () => {
        cy.fixture('user2').then( body => {
            body.name=name;
            body.email=email;
            body.senha=senha;
            cy.makeRequest(baseUrl ,"POST", "/usuarios", body,201);
        })
    });

    it("Realizar Login com usuário cadstrado", () => {
        cy.fixture('user2').then( body => {
            body.name=name;
            body.email=email;
            body.senha=senha;
            cy.makeRequest(baseUrl, "POST", "/signin", body,200);
        })
    });
});