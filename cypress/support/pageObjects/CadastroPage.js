/// <reference types="Cypress" />

const faker = require("faker-br");
import CadastroElements from "../elements/CadastroElements";
const cadastroElements = new CadastroElements();
const url = Cypress.config("baseUrl");

class CadastroPage {
  // Acessa o site
  acessarSite() {
    cy.visit(url);
  }

  // Ir para página de login
  clicarBotaoPaginaCadastro() {
    cy.contains("Novo usuário?").click();
    //adicionar um cy.wait()
  }
  visualizarBotaoCadastrar() {
    cy.get(cadastroElements.botaoCadastrar()).should("contain", "Cadastrar");
  }

  preencherCampoNome() {
    cy.get(cadastroElements.nameCadastro()).type(faker.name.findName());
  }

  preencherCampoEmail() {
    cy.get(cadastroElements.emailCadastro()).type(faker.internet.exampleEmail());
  }

  preencherCampoSenha() {
    cy.get(cadastroElements.passCadastro()).type(faker.internet.password());
  }

  preencherCamposCadastro() {
    this.preencherCampoNome();
    this.preencherCampoEmail();
    this.preencherCampoSenha();
  }

  clicarBotaoCadastrar() {
        cy.get(cadastroElements.botaoCadastrar()).click();
    }

  // preencherSenha(campo){
  //     cy.get(loginElements.passLogin()).type("1234");
  // }
  // preencherEmail(campo){
  //     cy.get(loginElements.emailLogin()).type("natan.bispo@teste.io");
  // }

  // //Preebcher os campos nescessário para fazer login
  // preencherCamposLogin(){
  //     cy.fixture('user1').then(body => {
  //         this.preencherEmail(body.email);
  //         this.preencherSenha(body.pass);
  //     });
  // }

  // clicarBotaoEntrar() {
  //     cy.get(loginElements.botaoEntrar()).click();
  // }

  // verificarAlerta(message){
  //     cy.fixture('alerts').then(body => {
  //         cy.get((loginElements.alert()))
  //         .should('be.visible')
  //         .contains(body[message]);
  //     });
  // }
}

export default CadastroPage;
