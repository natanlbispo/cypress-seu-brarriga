/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("que acesso o site Seu Barriga", () => {
    loginPage.acessarSite();
});

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
});

And("preencho os campos necessario para fazer o login", () => {
    loginPage.preencherCamposLogin();
});

And("não preencho os campos necessario para fazer o login", () => {});


And("clico no botão entrar", () => {
    loginPage.clicarBotaoEntrar();
});

And("preencho somente o campo de senha", () => {
    loginPage.preencherSenha(123);
});

And("preencho somente o campo de email", () => {
    loginPage.preencherEmail("natan.bispo@teste.com");
});

And("a mensagem deve informar o campo que está faltando ser preenchido", () => {
    loginPage.preencherSenha("email");
});


Then("devo visualizar o botão de Entrar", () => {
    loginPage.visualizarBotaoEntrar();
});

Then("devo vizualizar um aviso com uma mensagem do erro", () => {
    loginPage.verificarAlerta("notfound");

});

Then("devo vizualizar um aviso com uma mensagem do erro do campo email", () => {
    loginPage.verificarAlerta("email");

});

Then("devo vizualizar um aviso com uma mensagem do erro do campo senha", () => {
    loginPage.verificarAlerta("pass");

});

Then("devo vizualizar avisos com mensagens dos erros dos campos senha e email", () => {
    loginPage.verificarAlerta("pass");
    loginPage.verificarAlerta("email");

});
