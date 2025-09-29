/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de Usuário', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Matheus')
    cy.get('#signup-lastname')
    cy.get('#signup-email')
    cy.get('#signup-phone')
    cy.get('#signup-password')
    cy.get
  })
})