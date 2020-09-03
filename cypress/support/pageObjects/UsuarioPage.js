/// <reference types="Cypress" />

import UsuarioElements from "../elements/UsuarioElements";
const usuarioElements = new UsuarioElements();
import LoginElements from '../elements/LoginElements';
const loginElements = new LoginElements;

class UsuarioPage {

  mesgBem(name){
        cy.get((loginElements.alert()))
        .should('be.visible')
        .contains('Bem vindo, '+name);
  }

  acessarContas (){
    cy.get(usuarioElements.contas()).click();
  }

  adicionarConta(conta){
    cy.contains('Adicionar').click();
    cy.get('.body-index').contains('Salvar');
    cy.get(usuarioElements.inputConta()).type(conta);
    cy.contains('Salvar').click();

  }

}

export default UsuarioPage;
