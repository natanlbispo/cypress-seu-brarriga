/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

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
}

export default LoginPage;