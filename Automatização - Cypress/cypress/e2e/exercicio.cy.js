
describe(('exercicio'), ()=>{
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app')
    })
    it(('Verificação da página inicial'), ()=>{
        cy.get('.initial > img').should('be.visible')
        cy.contains('Quem ama adota!').should('be.visible')
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
        cy.get('.header__message').click()
        cy.get('[data-test="input-loginEmail"]').type('anaemail@email.com')
        cy.get('[data-test="input-loginPassword"]').type('123456Aa')
        cy.get('[data-test="submit-button"]').click()

    })

})