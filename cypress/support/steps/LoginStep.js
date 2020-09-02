/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site Seu Barriga", () => {
    loginPage.acessarSite();
});

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
});

And("preencho os campos necessario para fazer o login", () => {
    loginPage.preencherCamposLogin();
});

And("clico no botão entrar", () => {
    loginPage.clicarBotaoEntrar();
});

Then("devo visualizar o botão de Entrar", () => {
    loginPage.visualizarBotaoEntrar();
});

Then("devo visualizar uma mensagem informando erro", () => {
    loginPage.verificarAlerta();
});
