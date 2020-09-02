/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements';
const loginElements = new LoginElements;
const url = Cypress.config("baseUrl");

class LoginPage {
    // Acessa o site
    acessarSite() {
        cy.visit(url);
    }

    // Ir para página de login
    clicarBotaoPaginaLogin() {
        cy.get('[class=active]').click();
        //adicionar um cy.wait()
    }
    // Verifica se o botão tem o texto "Entrar"
    visualizarBotaoEntrar() {
        cy.get(loginElements.botaoEntrar()).should('contain', 'Entrar');
    }

    preencherSenha(campo){
        cy.get(loginElements.passLogin()).type("1234");
    }
    preencherEmail(campo){
        cy.get(loginElements.emailLogin()).type("natan.bispo@teste.io");
    }

    //Preebcher os campos nescessário para fazer login
    preencherCamposLogin(){
        cy.fixture('user1').then(body => {
            this.preencherEmail(body.email);
            this.preencherSenha(body.pass);
        });
    }

    clicarBotaoEntrar() {
        cy.get(loginElements.botaoEntrar()).click();
    }

    verificarAlerta(message){
        cy.fixture('alerts').then(body => {
            cy.get((loginElements.alert()))
            .should('be.visible')
            .contains(body[message]);
        });
    }

    
}

export default LoginPage;