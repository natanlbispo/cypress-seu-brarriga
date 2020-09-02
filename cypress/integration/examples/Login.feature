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
        Then devo visualizar uma mensagem informando erro
