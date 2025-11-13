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

  it("criar um cadastro valido", () => {
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
  });

  it("criar um cadastro sem o campo nome", () => {
    cy.cadastrarCliente(
      "",
      usuario.email,
      usuario.telefone,
      usuario.senha,
      usuario.confirmarSenha
    );

    cy.validarTesteCadastro("❌ Nome é obrigatório.");
  });

  it("criar um cadastro sem o campo email", () => {
    cy.cadastrarCliente(
      usuario.nome,
      "",
      usuario.telefone,
      usuario.senha,
      usuario.confirmarSenha
    );

    cy.validarTesteCadastro("❌ Email é obrigatório.");
  });

  it("criar um cadastro sem o campo telefone", () => {
    cy.cadastrarCliente(
      usuario.nome,
      usuario.email,
      "",
      usuario.senha,
      usuario.confirmarSenha
    );

    cy.validarTesteCadastro("❌ Telefone é obrigatório.");
  });

  it("criar um cadastro sem o campo senha", () => {
    cy.cadastrarCliente(
      usuario.nome,
      usuario.email,
      usuario.telefone,
      "",
      usuario.confirmarSenha
    );

    cy.validarTesteCadastro("❌ Senha é obrigatório.");
  });

  it("criar um cadastro sem o campo confirmar senha", () => {
    cy.cadastrarCliente(
      usuario.nome,
      usuario.email,
      usuario.telefone,
      usuario.senha,
      ""
    );

    cy.validarTesteCadastro("❌ Confirmar Senha é obrigatório.");
  });

  it("criar um cadastro com senha e confirmar com menos de 6 caracteres", () => {
    cy.cadastrarCliente(
      usuario.nome,
      usuario.email,
      usuario.telefone,
      "123",
      "123"
    );

    cy.validarTesteCadastro("❌ 🔒 A senha deve ter pelo menos 6 caracteres.");
  });

  it("deletar cadastro", () => {
    cy.deletarCadastro(usuario.nome);
  });
});
