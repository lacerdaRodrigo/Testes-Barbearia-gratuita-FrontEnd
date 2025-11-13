Cypress.Commands.add("deletarCadastro", (nome) => {
  cy.request({
    url: `/cadastro/${nome}`,
    method: "DELETE",
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add("deletarAdmins", (nome) => {
  cy.request({
    url: `https://barbearia-gratuita.onrender.com/admin/usuarios/${nome}`,
    method: "DELETE",
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add(
  "cadastrarCliente",
  (nome, email, telefone, senha, confirmarSenha) => {
    cy.contains("button", "Cadastro").click();

    if (nome) cy.get("#cadastro-nome").type(nome);

    if (email) cy.get("#cadastro-email").type(email);

    if (telefone) cy.get("#cadastro-telefone").type(telefone);

    if (senha) cy.get("#cadastro-senha").type(senha);

    if (confirmarSenha) cy.get("#confirm-senha").type(confirmarSenha);

    cy.contains("button", "Cadastrar").click();
  }
);

Cypress.Commands.add("validarTesteCadastro", (mensagem) => {
  cy.contains("#message", mensagem).should("be.visible");
});

Cypress.Commands.add("validarTesteLogin", (mensagem) => {
  cy.contains("#message", mensagem).should("be.visible");
});

Cypress.Commands.add("realizarLogin", (email, senha) => {
  cy.get("#login-email").type(email);
  cy.get("#login-senha").type(senha);

  cy.contains("button", "Entrar").click();
});

Cypress.Commands.add("criarNovoAdmin", (nome, email, senha) => {
  cy.contains("button", "Admin").click();

  if (nome) cy.get("#novo-admin-nome").type(nome);
  if (email) cy.get("#novo-admin-email").type(email);
  if (senha) cy.get("#novo-admin-senha").type(senha);

  cy.contains("button", "Criar Admin").click();
});

Cypress.Commands.add("validarTesteCriarAdmin", (mensagem) => {
  cy.contains("#message", mensagem).should("be.visible");
});

Cypress.Commands.add("realizarLoginAdmin", (email, senha) => {
  cy.contains("button", "Admin").click();
  if (email) cy.get("#admin-email").type(email);
  if (senha) cy.get("#admin-senha").type(senha);

  cy.contains("button", "Entrar como Admin").click();
});

Cypress.Commands.add("validarLoginAdmin", (nome) => {
  cy.contains("#admin-name", nome).should("be.visible");
});

Cypress.Commands.add("deletarAgendamento", () => {
  cy.request({
    url: "/agendamento/delete",
    method: "DELETE",
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});
