/* global Given, Then, When */

const faker = require("faker-br");
import LoginPage from '../pageobjects/LoginPage'
import CadastroPage from '../pageobjects/CadastroPage'
import UsuarioPage from '../pageobjects/UsuarioPage'
const loginPage = new LoginPage
const cadastroPage = new CadastroPage;
const usuarioPage = new UsuarioPage;

let name= faker.name.findName(), 
email=faker.internet.exampleEmail(),
senha=faker.internet.password(),
conta ='Conta 1';

Given("acesso o site Seu Barriga", () => {
    loginPage.acessarSite();
});

When("acesso o menu Contas", () => {
    usuarioPage.acessarContas();
});

And("realizo o cadastro da minha conta", () => {
    cadastroPage.clicarBotaoPaginaCadastro();
    cadastroPage.visualizarBotaoCadastrar();
    cadastroPage.preencherCamposCadastro(name,email,senha);
    cadastroPage.clicarBotaoCadastrar();
    loginPage.verificarAlerta("confirm");
});

And("preencho os campos do login com os dados cadastrados", () => {
    loginPage.preencherCamposLogin(email,senha);
});

And("realizo login na plataforma", () => {
    loginPage.preencherCamposLogin(email,senha);
    loginPage.clicarBotaoEntrar();
    usuarioPage.mesgBem(name);
});

And("clico para entrar no sistema", () => {
    loginPage.clicarBotaoEntrar();
});

And("adiciono uma conta", () => {
    usuarioPage.adicionarConta(conta);
    loginPage.verificarAlerta("conta");

});
Then("devo visualizar uma mensagem de bem vindo", () => {
    usuarioPage.mesgBem(name);
});
