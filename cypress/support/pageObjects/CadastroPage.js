/// <reference types="Cypress" />

const faker = require("faker-br");
import CadastroElements from "../elements/CadastroElements";
const cadastroElements = new CadastroElements();
const url = Cypress.config("baseUrl");

class CadastroPage {

  // Ir para página de login
  clicarBotaoPaginaCadastro() {
    cy.contains("Novo usuário?").click();
    //adicionar um cy.wait()
  }
  visualizarBotaoCadastrar() {
    cy.get(cadastroElements.botaoCadastrar()).should("contain", "Cadastrar");
  }

  preencherCampoNome(name) {
    cy.get(cadastroElements.nameCadastro()).type(name);
  }

  preencherCampoEmail(email) {
    cy.get(cadastroElements.emailCadastro()).type(email);
  }

  preencherCampoSenha(senha) {
    cy.get(cadastroElements.passCadastro()).type(senha);
  }

  preencherCamposCadastro(name= faker.name.findName(), email=faker.internet.exampleEmail(),senha=faker.internet.password()) {

    this.preencherCampoNome(name);
    this.preencherCampoEmail(email);
    this.preencherCampoSenha(senha);
  }

  clicarBotaoCadastrar() {
        cy.get(cadastroElements.botaoCadastrar()).click();
    }
}

export default CadastroPage;
