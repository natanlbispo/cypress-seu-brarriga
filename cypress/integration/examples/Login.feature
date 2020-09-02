Feature: Login site Seu Barriga
    Como usuário devo ser possivel entrar na tela de login e efetuar login

    Scenario: Acessar página de login
        Given acesso o site Seu Barriga
        When acesso a pagina de login
        Then devo visualizar o botão de Entrar

    Scenario: Tentar fazer login de usuário não cadastrado
        Given acesso o site Seu Barriga
        When acesso a pagina de login
        And preencho os campos necessario para fazer o login
        And clico no botão entrar
        Then devo vizualizar um aviso com uma mensagem do erro

    Scenario: Tentar fazer login sem preencher campo de email
        Given acesso o site Seu Barriga
        When acesso a pagina de login
        And preencho somente o campo de senha
        And clico no botão entrar
        Then devo vizualizar um aviso com uma mensagem do erro do campo email

    Scenario: Tentar fazer login sem preencher campo de senha"
        Given acesso o site Seu Barriga
        When acesso a pagina de login
        And preencho somente o campo de email
        And clico no botão entrar
        Then devo vizualizar um aviso com uma mensagem do erro do campo senha

    Scenario: Tentar fazer login com campos em branco
        Given acesso o site Seu Barriga
        When acesso a pagina de login
        And não preencho os campos necessario para fazer o login
        And clico no botão entrar
        Then devo vizualizar avisos com mensagens dos erros dos campos senha e email