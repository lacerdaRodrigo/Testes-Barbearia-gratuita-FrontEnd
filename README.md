# Testes Barbearia Gratuita (Front-end)

Breve documentação do repositório de testes end-to-end escritos com Cypress.

- **Linguagem / Stack**: JavaScript, Cypress
- **Objetivo**: Testes automatizados E2E para a aplicação front-end da barbearia.
- **Local dos testes**: `cypress/e2e/testes-frontEnd`
- **Documentação BDD**: `documentacao/bdd/casos_de_testes.feature`

**Como clonar o repositório**:

```bash
git clone https://github.com/lacerdaRodrigo/Testes-Barbearia-gratuita-FrontEnd.git
cd Testes-Barbearia-gratuita-FrontEnd
```

**Pré-requisitos**:

- Node.js (recomenda-se v18+)
- npm

**Instalar dependências**:

```bash
npm install
```

**Executar os testes (modo interativo)**:

```bash
npm run test
# ou
npx cypress open
```

**Executar os testes em modo headless**:

```bash
npx cypress run
```

Observações:

- Os testes usam `cy.visit('/')` e o `baseUrl` do Cypress já está configurado para `https://barbearia-gratuita.onrender.com` em `cypress.config.js`. Ou seja, por padrão os testes apontam para a aplicação hospedada em Render.
- Se preferir rodar os testes contra uma instância local, sobrescreva o `baseUrl` ao abrir/rodar o Cypress:

```bash
# modo interativo (aponta para localhost:3000)
npx cypress open --config baseUrl=https://barbearia-gratuita.onrender

# modo headless
npx cypress run --config baseUrl=https://barbearia-gratuita.onrender
```

- A documentação em formato BDD está em `documentacao/bdd/casos_de_testes.feature` e descreve os cenários traduzidos dos arquivos em `cypress/e2e/testes-frontEnd`.

Nota: estes testes foram desenvolvidos para o sistema front-end hospedado em `https://github.com/lacerdaRodrigo/Barbearia-Gratuita`. Os cenários e interações automatizados neste repositório refletem o comportamento da aplicação presente naquele repositório.

Se quiser, eu posso:

- Separar os cenários BDD em arquivos por área (`admin.feature`, `cadastro.feature`, etc.),
- Gerar um esqueleto de step definitions para executar com um runner Gherkin + Cypress.

---

Arquivo gerado automaticamente: `documentacao/bdd/casos_de_testes.feature`.# Testes-Barbearia-FrontEnd
