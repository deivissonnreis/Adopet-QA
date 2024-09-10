const { it } = require("mocha")

describe('Register page', () => {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app')
        cy.get('[data-test="login-button"]').click()
        cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
          statusCode:400, }).as('stubPost')
        })

    it('it must fill the form fild wrong and show massage error ', () => {
      cy.get('[data-test="input-loginEmail"]').type('anaemailemail.com')
      cy.get('[data-test="input-loginPassword"]').type('123456')
      cy.get('[data-test="submit-button"]').click()
      cy.contains('Por favor, verifique o email digitado').should('be.visible')
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
    })

    it('it must fill right and show message error', ()=>{
      cy.login('anaemail@email.com', '123456Ba')
      cy.wait('@stubPost')
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')


    })
  })
  