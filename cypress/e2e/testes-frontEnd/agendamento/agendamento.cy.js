/// <reference types="cypress" />

describe("criar um agendamento para usuario", () => {
  const usuarioAgendamento = {
    email: "agendamento@teste.com",
    senha: "123456",
  };

  beforeEach(() => {
    cy.visit("/");
  });

  it.only("agendar um serviço com sucesso", () => {
    cy.realizarLogin(usuarioAgendamento.email, usuarioAgendamento.senha);
    //cy.realizarLoginAgendamento(usuarioAgendamento.email, usuarioAgendamento.senha)

    cy.get("#tipo-servico").select("💇‍♂️ Corte Masculino - R$ 25.00");

    cy.get("#data-agendamento").type("2025-10-27");

    cy.wait(4000);
    cy.get("#data-agendamento").trigger("change");
    cy.get("#hora-agendamento").select("08:00");
    cy.wait(4000);

    cy.contains("button", "✅ Confirmar Agendamento").click();
    cy.contains("#dashboard-message", "❌ ⏰ Horário é obrigatório.").should(
      "be.visible"
    );
  });

  it("deletar cadastro e agendamento", () => {
    cy.deletarAgendamento("Usuario Teste");
  });
});
