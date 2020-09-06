Feature: Realizar fluxos do usuário
    Como usuário devo conseguir fazer um cadastro na aplicação, execultar o login e interagir com o sistema

    Scenario: Realizar login na aplicação
        Given que acesso o site Seu Barriga
        And realizo o cadastro da minha conta
        When acesso a pagina de login
        And preencho os campos do login com os dados cadastrados
        And clico para entrar no sistema
        Then devo visualizar uma mensagem de bem vindo

    Scenario: Adicionar uma Conta
        Given que acesso o site Seu Barriga
        And realizo login na plataforma
        When acesso o menu Contas
        And adiciono uma conta
        Then devo visualizar uma mensagem informando que a conta foi adicionada