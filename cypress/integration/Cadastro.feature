Feature: Efetuar um cadastro site Seu Barriga
    Como usuário devo conseguir concluir um casdastro na plataforma

    Scenario: Acessar página de cadastro
        Given que acesso o site Seu Barriga
        When acesso a pagina de cadastro
        Then devo visualizar o botão de Cadastrar

    Scenario: Cadastrar usuário na plataforma
        Given que acesso o site Seu Barriga
        When acesso a pagina de cadastro
        And preencho os campos necessarios para fazer o cadastro
        And clico no botão Cadastrar
        Then devo ser direcinado para tela de login
        And vizualizo uma mensagem de confimração

    Scenario: Realizar Cadastro com campos em branco
        Given que acesso o site Seu Barriga
        When acesso a pagina de cadastro
        And não preencho os campos necessario para fazer o casdastro
        And clico no botão Cadastrar
        Then devo vizualizar avisos com mensagens dos erros dos campos nome, senha, email