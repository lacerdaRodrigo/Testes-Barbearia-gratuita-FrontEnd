"""
Arquivo: casos_de_testes.feature
Descrição: Tradução dos testes Cypress para formato BDD (Gherkin) em Português.
Gerado automaticamente a partir dos arquivos em `cypress/e2e/testes-frontEnd`.
"""

# language: pt
Funcionalidade: Casos de Teste da Barbearia (tradução BDD)
  Como parte da documentação de testes
  Quero cenários em formato BDD (Dado/Quando/Então)
  Para entender os fluxos cobertos pelos testes automatizados

  # Área: Administração - Cadastro de Admin
  Cenário: Cadastrar um administrador com sucesso
    Dado que eu estou na página inicial da aplicação
    Quando eu cadastro um novo administrador com nome "Admin Teste", email "admin.teste@exemplo.com" e senha "admin123"
    Então devo ver a mensagem "✅ Admin criado com sucesso"

  Cenário: Tentar cadastrar administrador com email já existente
    Dado que eu estou na página inicial da aplicação
    E existe um administrador com email "admin.teste@exemplo.com"
    Quando eu tento cadastrar outro administrador com o mesmo email
    Então devo ver a mensagem de erro "❌ Email já cadastrado para outro administrador."

  Cenário: Cadastrar administrador sem nome
    Dado que eu estou na página inicial da aplicação
    Quando eu tento cadastrar um administrador sem nome, com email "admin.teste@exemplo.com" e senha "admin123"
    Então devo ver a mensagem de erro "❌ Nome é obrigatório."

  Cenário: Cadastrar administrador com nome inválido (contendo números)
    Dado que eu estou na página inicial da aplicação
    Quando eu tento cadastrar um administrador com nome "Admin123"
    Então devo ver a mensagem de erro "❌ Nome deve conter apenas letras e espaços."

  Cenário: Cadastrar administrador sem email
    Dado que eu estou na página inicial da aplicação
    Quando eu tento cadastrar um administrador sem email
    Então devo ver a mensagem de erro "❌ Email é obrigatório."

  Cenário: Cadastrar administrador com email inválido
    Dado que eu estou na página inicial da aplicação
    Quando eu tento cadastrar um administrador com email inválido "admin.testeexemplo"
    Então devo ver a mensagem de erro "❌ Por favor, insira um email válido."

  Cenário: Cadastrar administrador sem senha
    Dado que eu estou na página inicial da aplicação
    Quando eu tento cadastrar um administrador sem senha
    Então devo ver a mensagem de erro "❌ Senha é obrigatório."

  Cenário: Deletar cadastro de administrador
    Dado que existe um administrador chamado "Admin Teste"
    Quando eu deleto o administrador "Admin Teste"
    Então o administrador "Admin Teste" não deve mais existir na lista de administradores

  # Área: Administração - Login
  Cenário: Login de administrador com sucesso
    Dado que eu criei o administrador "Admin Login" com email "admin.login@exemplo.com" e senha "admin123"
    Quando eu realizo login com email "admin.login@exemplo.com" e senha "admin123"
    Então devo ver que o login foi realizado e meu nome "Admin Login" aparece como usuário autenticado

  Cenário: Login de administrador com credenciais inválidas
    Dado que eu estou na página inicial
    Quando eu tento realizar login com email "email.invalido@exemplo.com" e senha "senhaInvalida"
    Então devo ver a mensagem "❌ Credenciais inválidas."

  Cenário: Login de administrador com email inválido
    Dado que eu estou na página inicial
    Quando eu tento realizar login com email inválido "emailinvalido@teste.com"
    Então devo ver a mensagem "❌ Credenciais inválidas."

  Cenário: Login de administrador com senha inválida
    Dado que eu estou na página inicial
    Quando eu tento realizar login com senha inválida
    Então devo ver a mensagem "❌ Credenciais inválidas."

  Cenário: Deletar administrador via fluxo de limpeza
    Dado que existe um administrador chamado "Admin Login"
    Quando eu deleto o administrador "Admin Login"
    Então o administrador não deve mais existir

  # Área: Cadastro de Clientes
  Cenário: Criar cadastro de cliente válido
    Dado que eu estou na página inicial
    Quando eu cadastro um cliente com nome "Rodrigo Lacerda", email "rodrigo.lacerda@exemplo.com", telefone "11987654321" e senha "123456"
    Então devo ver a mensagem "✅ 🎉 Cadastro realizado com sucesso! Redirecionando para o login..."

  Cenário: Tentar criar cadastro sem nome
    Dado que eu estou na página inicial
    Quando eu tento cadastrar um cliente sem nome
    Então devo ver a mensagem "❌ Nome é obrigatório."

  Cenário: Tentar criar cadastro sem email
    Dado que eu estou na página inicial
    Quando eu tento cadastrar um cliente sem email
    Então devo ver a mensagem "❌ Email é obrigatório."

  Cenário: Tentar criar cadastro sem telefone
    Dado que eu estou na página inicial
    Quando eu tento cadastrar um cliente sem telefone
    Então devo ver a mensagem "❌ Telefone é obrigatório."

  Cenário: Tentar criar cadastro sem senha
    Dado que eu estou na página inicial
    Quando eu tento cadastrar um cliente sem senha
    Então devo ver a mensagem "❌ Senha é obrigatório."

  Cenário: Tentar criar cadastro sem confirmar senha
    Dado que eu estou na página inicial
    Quando eu tento cadastrar um cliente sem confirmar senha
    Então devo ver a mensagem "❌ Confirmar Senha é obrigatório."

  Cenário: Criar cadastro com senha curta
    Dado que eu estou na página inicial
    Quando eu tento cadastrar um cliente com senha e confirmação de 3 caracteres
    Então devo ver a mensagem "❌ 🔒 A senha deve ter pelo menos 6 caracteres."

  Cenário: Deletar cadastro de cliente
    Dado que existe um cliente chamado "Rodrigo Lacerda"
    Quando eu deleto o cadastro do cliente "Rodrigo Lacerda"
    Então o cadastro não deve mais existir

  # Área: Login de Clientes
  Cenário: Realizar login com credenciais válidas
    Dado que eu cadastrei um cliente com email "rodrigo.lacerda@exemplo.com" e senha "123456"
    Quando eu realizo login com email "rodrigo.lacerda@exemplo.com" e senha "123456"
    Então devo ver a mensagem "✅ Login realizado com sucesso!"

  Cenário: Realizar login com email inválido (formato)
    Dado que eu estou na página inicial
    Quando eu tento realizar login com email "rodrigo.lacerda@exemplo"
    Então devo ver a mensagem "❌ 📧 Por favor, insira um email válido."

  Cenário: Realizar login com senha inválida
    Dado que eu estou na página inicial
    Quando eu tento realizar login com senha incorreta
    Então devo ver a mensagem "❌ Credenciais inválidas."

  Cenário: Deletar cadastro após testes de login
    Dado que existe um cliente com nome "Rodrigo Lacerda"
    Quando eu deleto o cadastro do cliente
    Então o cadastro não deve mais existir

  # Área: Agendamento
  Cenário: Agendar um serviço para usuário (fluxo com validação de horário)
    Dado que eu estou autenticado com o usuário "agendamento@teste.com"
    Quando eu seleciono o serviço "Corte Masculino - R$ 25.00"
    E eu seleciono a data "2025-10-27" e o horário "08:00"
    E eu confirmo o agendamento
    Então devo ver a mensagem de validação presente no dashboard, por exemplo "❌ ⏰ Horário é obrigatório." (validar comportamento esperado conforme implementação)

  Cenário: Deletar agendamento e cadastro relacionados
    Dado que existe um agendamento para "Usuario Teste"
    Quando eu deleto o agendamento associado
    Então o agendamento não deve mais existir
