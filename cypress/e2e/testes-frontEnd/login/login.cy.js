/// <reference types="cypress" />

describe("cadastro de clientes barbearia", () => {
  const usuario = {
    nome: "Rodrigo Lacerda",
    email: "rodrigo.lacerda@exemplo.com",
    telefone: "11987654321",
    senha: "123456",
    confirmarSenha: "123456",
  };

  beforeEach(() => {
    cy.visit("/");
  });

  it("realizar login com credenciais válidas", () => {
    cy.cadastrarCliente(
      usuario.nome,
      usuario.email,
      usuario.telefone,
      usuario.senha,
      usuario.confirmarSenha
    );
    cy.validarTesteCadastro(
      "✅ 🎉 Cadastro realizado com sucesso! Redirecionando para o login..."
    );

    cy.realizarLogin(usuario.email, usuario.senha);
    cy.validarTesteLogin(`✅ Login realizado com sucesso!`);
  });

  it("realizar login com credencial de email invalida", () => {
    cy.realizarLogin("rodrigo.lacerda@exemplo", usuario.senha);

    cy.validarTesteLogin("❌ 📧 Por favor, insira um email válido.");
  });

  it("realizar login com credencial de senha invalida", () => {
    cy.realizarLogin(usuario.email, "12345");

    cy.validarTesteLogin("❌ Credenciais inválidas.");
  });

  it("deletar cadastro", () => {
    cy.deletarCadastro(usuario.nome);
  });
});
