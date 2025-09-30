/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de Usuário', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Matheus')
    cy.get('#signup-lastname').type('Lucindo')
    cy.get('#signup-email').type('matheuslucindo904@gmail.com')
    cy.get('#signup-phone').type('11971666817')
    cy.get('#signup-password').type('Matheus!12345')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Usuário cadastrado com sucesso')
  })
})

describe('US-015-Recomendações de Filmes', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#recommendations1 > :nth-child(1) > img').click()
    cy.get(':nth-child(2) > img').click()
    cy.get(':nth-child(3) > img').click()
  })
})