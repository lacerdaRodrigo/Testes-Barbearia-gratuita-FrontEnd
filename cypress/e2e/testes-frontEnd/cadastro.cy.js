/// <reference types="cypress" />



// 1. DEFINIÇÃO DA VARIÁVEL DE REPETIÇÃO
const NUM_REPETICOES = 50; 

describe('Login/Cadastro Testes Repetidos', () => {
    
    // Hook que roda antes de CADA BLOCO 'IT'
    beforeEach(() => {
        cy.viewport(1440, 900);
        // Garante que a página esteja limpa em cada iteração
        cy.visit('https://barbearia-gratuita.onrender.com/')
    });

    // 2. O LOOP GERA OS BLOCOS 'IT'
    for (let i = 1; i <= NUM_REPETICOES; i++) {
        // Gera um email único para cada iteração
        const emailUnico = `teste_loop_${i}@teste.com.br`;
        // Gera um telefone único e sequencial
        // Usa uma constante maior para garantir que o número gerado é válido
        const telefoneBase = 31984288495; 
        const telefoneUnico = String(telefoneBase + i);

        // Define um bloco 'it' para cada repetição
        it.only(`Deve cadastrar o cliente - Iteração ${i} (Email: ${emailUnico})`, () => {
            cy.log(`Iniciando cadastro - Iteração ${i}`);

            // 1. Clique na aba de cadastro
            cy.get('button[data-tab="cadastro"]').click();

            // --- CAMPO NOME ---
            cy.contains('label[for="cadastro-nome"]', '👤 Nome').should('be.visible');
            cy.get('#cadastro-nome').type(`Rodrigo Lacerda ${i}`); 
            cy.get('#cadastro-nome').should('have.value', `Rodrigo Lacerda ${i}`);

            // --- CAMPO EMAIL (ÚNICO) ---
            cy.contains('label[for="cadastro-email"]', '📧 Email').should('be.visible');
            cy.get('#cadastro-email').type(emailUnico);
            cy.get('#cadastro-email').should('have.value', emailUnico);

            // --- CAMPO CELULAR (ÚNICO) ---
            cy.contains('label[for="cadastro-telefone"]', '📞 Telefone').should('be.visible');
            cy.get('#cadastro-telefone').type(telefoneUnico);
            cy.get('#cadastro-telefone').should('have.value', telefoneUnico);

            // --- CAMPO SENHA ---
            cy.contains('label[for="cadastro-senha"]', '🔒 Senha').should('be.visible');
            cy.get('#cadastro-senha').type('Senha123!');
            cy.get('#cadastro-senha').should('have.value', 'Senha123!');

            // --- CAMPO CONFIRMAR SENHA ---
            cy.contains('label[for="confirm-senha"]', '🔒 Confirmar Senha').should('be.visible');
            cy.get('#confirm-senha').type('Senha123!');
            cy.get('#confirm-senha').should('have.value', 'Senha123!');

            // --- BOTÃO CADASTRAR ---
            cy.get('button[type="submit"]').contains('Cadastrar').should('be.visible').click();

            // >>> RECOMENDAÇÃO: Adicione uma asserção de sucesso aqui
            // Exemplo:
            // cy.contains('Cadastro realizado com sucesso!').should('be.visible');

            cy.log(`Cadastro finalizado - Iteração ${i}`);
        });
    }
});



describe('Testes da API: DELEÇÃO EM MASSA (/cadastro/deletar_todos)', () => {

  // A URL Base da sua aplicação
  const BASE_URL = 'https://barbearia-gratuita.onrender.com';

  // O endpoint de deleção em massa
  const DELETAR_TODOS_ENDPOINT = `${BASE_URL}/cadastro/deletar_todos`;

  // NOTA: O hook 'before' é removido, pois não é necessário criar dados.
  // O teste só fará o DELETE.

  it('Deve deletar todos os usuários e retornar o status 200 com a contagem de excluídos', () => {

    cy.log(`Chamando DELETE em massa: ${DELETAR_TODOS_ENDPOINT}`);

    // 1. AÇÃO: Executar o método DELETE
    cy.request({
      method: 'DELETE',
      url: DELETAR_TODOS_ENDPOINT,
      // Não é necessário failOnStatusCode: false se esperamos 200/404/etc.
    }).then((response) => {

      // 2. ASSERTION (1): Verificar Status
      // O endpoint de deleção em massa que configuramos retorna 200
      expect(response.status).to.eq(200);

      // 3. ASSERTION (2): Verificar a mensagem de sucesso e a contagem.
      // A sua API deve retornar algo como: "{ 'mensagem': 'X usuários deletados com sucesso.' }"

      // Verifica se a mensagem contém a frase chave
      expect(response.body.mensagem).to.include('usuários deletados com sucesso.');

      // Opcional: Se a API retornar a contagem em outro campo (ex: response.body.count):
      // expect(response.body.count).to.be.a('number');

      cy.log(`API respondeu: ${response.body.mensagem}`);
    });

    // 4. ASSERTION FINAL (OPCIONAL): Tentar buscar a lista de usuários para garantir que está vazia
    // Isso requer um endpoint GET /cadastro que retorna a lista
    // cy.request('GET', `${BASE_URL}/cadastro`).then((response) => {
    //     expect(response.status).to.eq(200);
    //     expect(response.body).to.be.an('array').and.to.have.lengthOf(0);
    // });

  });

});