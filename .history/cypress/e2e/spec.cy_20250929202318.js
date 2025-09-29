/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de Usuário', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Matheus')
    cy.get('#signup-lastname').type('Santos')
    cy.get('#signup-email').type('matheus.santos@example.com')
    cy.get('#signup-phone').type('1234567890')
    cy.get('#signup-password').type('123456')
    cy.get('#signup-button').click()
  })
})