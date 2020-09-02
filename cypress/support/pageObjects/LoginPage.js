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

    //Preebcher os campos nescessário para fazer login
    preencherCamposLogin(){
        cy.fixture('user1').then(body => {
            cy.get(loginElements.emailLogin()).type(body.email);
            cy.get(loginElements.passLogin()).type(body.pass);
        })
    }

    clicarBotaoEntrar() {
        cy.get(loginElements.botaoEntrar()).click();
    }

    verificarAlerta(){
        cy.get((loginElements.alert())).should('be.visible');
    }
}

export default LoginPage;