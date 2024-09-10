import {usuarios} from '../fixtures/users.json'

describe('Cadastro em massa com JSON', () =>{
    beforeEach(()=>{
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="register-button"]').click()


    })
    usuarios.forEach(user =>{
        it('Cadastrando usuário', ()=>{
            cy.get('[data-test="input-name"]').clear().type(user.nome)
            cy.get('[data-test="input-email"]').clear().type(user.email)
            cy.get('[data-test="input-password"]').clear().type(user.senha)
            cy.get('[data-test="input-confirm-password"]').clear().type(user.senha)
            cy.get('[data-test="submit-button"]').click()
        })
    })
})