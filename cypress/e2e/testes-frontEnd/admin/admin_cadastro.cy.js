/// <reference types="cypress" />

describe("cadastrar admin da barbearia", () => {
  const usuarioAdmin = {
    nome: "Admin Teste",
    email: "admin.teste@exemplo.com",
    senha: "admin123",
  };
  beforeEach(() => {
    cy.visit("/");
  });
  it("cadastrar admin", () => {
    cy.criarNovoAdmin(
      usuarioAdmin.nome,
      usuarioAdmin.email,
      usuarioAdmin.senha
    );

    cy.validarTesteCriarAdmin("✅ Admin criado com sucesso");
  });

  it("criar cadastro com dados repetidos", () => {
    cy.criarNovoAdmin(
      usuarioAdmin.nome,
      usuarioAdmin.email,
      usuarioAdmin.senha
    );

    cy.validarTesteCriarAdmin(
      "❌ Email já cadastrado para outro administrador."
    );
  });

  it("criar cadastro de admin sem nome", () => {
    cy.criarNovoAdmin("", usuarioAdmin.email, usuarioAdmin.senha);

    cy.validarTesteCriarAdmin("❌ Nome é obrigatório.");
  });

  it("criar cadastro de nome inválido com numero", () => {
    cy.criarNovoAdmin("Admin123", usuarioAdmin.email, usuarioAdmin.senha);

    cy.validarTesteCriarAdmin("❌ Nome deve conter apenas letras e espaços.");
  });

  it("criar cadastro de admin sem email", () => {
    cy.criarNovoAdmin("Admin Teste", "", "admin123");

    cy.validarTesteCriarAdmin("❌ Email é obrigatório.");
  });

  it("criar cadastro de admin com email inválido", () => {
    cy.criarNovoAdmin("Admin Teste", "admin.testeexemplo", "admin123");

    cy.validarTesteCriarAdmin("❌ Por favor, insira um email válido.");
  });

  it("criar cadastro de admin sem senha", () => {
    cy.criarNovoAdmin("Admin Teste", "admin.teste@exemplo.com", "");

    cy.validarTesteCriarAdmin("❌ Senha é obrigatório.");
  });

  it("deletar cadastro de admin", () => {
    cy.deletarAdmins("Admin Teste");
  });
});
