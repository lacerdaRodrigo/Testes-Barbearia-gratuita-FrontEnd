/// <reference types="cypress" />

describe("Login de admin da barbearia", () => {
  const usuarioAdmin = {
    nome: "Admin Login",
    email: "admin.login@exemplo.com",
    senha: "admin123",
  };

  beforeEach(() => {
    cy.visit("/");
  });

  it("realizar login com sucesso", () => {
    cy.criarNovoAdmin(
      usuarioAdmin.nome,
      usuarioAdmin.email,
      usuarioAdmin.senha
    );
    cy.validarTesteCriarAdmin("✅ Admin criado com sucesso");

    cy.realizarLoginAdmin(usuarioAdmin.email, usuarioAdmin.senha);
    cy.validarLoginAdmin(usuarioAdmin.nome);
  });

  it("realizar login com credenciais inválidas", () => {
    cy.realizarLoginAdmin("email.invalido@exemplo.com", "senhaInvalida");
    cy.validarTesteLogin("❌ Credenciais inválidas.");
  });

  it("realizar login com email invalido", () => {
    cy.realizarLoginAdmin("emailinvalido@teste.com", usuarioAdmin.senha);
    cy.validarTesteLogin("❌ Credenciais inválidas.");
  });

  it("realizar login com senha invalida", () => {
    cy.realizarLoginAdmin(usuarioAdmin.email, "senhaInvalida");
    cy.validarTesteLogin("❌ Credenciais inválidas.");
  });

  it("deletar admin", () => {
    cy.deletarAdmins(usuarioAdmin.nome);
  });
});
