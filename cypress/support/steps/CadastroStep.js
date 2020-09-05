/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage'
import CadastroPage from '../pageobjects/CadastroPage'
const loginPage = new LoginPage
const cadastroPage = new CadastroPage;


Given("que acesso o site Seu Barriga", () => {
    loginPage.acessarSite();
});

When("acesso a pagina de cadastro", () => {
    cadastroPage.clicarBotaoPaginaCadastro();
});


And("preencho os campos necessario para fazer o cadastro", () => {
    cadastroPage.preencherCamposCadastro();
});

And("não preencho os campos necessario para fazer o cadastro", () => {});

And("clico no botão Cadastrar", () => {
    cadastroPage.clicarBotaoCadastrar();
});

And("vizualizo uma mensagem de confimração", () => {
    loginPage.verificarAlerta("confirm");
});

Then("devo visualizar o botão de Cadastrar", () => {
    cadastroPage.visualizarBotaoCadastrar();
});

Then("devo ser direcinado para tela de login", () => {
    loginPage.visualizarBotaoEntrar();
});

Then("devo vizualizar avisos com mensagens dos erros dos campos nome, senha, email", () => {
    loginPage.verificarAlerta("pass");
    loginPage.verificarAlerta("email");
    loginPage.verificarAlerta("name");

});
