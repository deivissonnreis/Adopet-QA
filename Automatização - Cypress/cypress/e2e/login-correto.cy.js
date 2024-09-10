describe('Register page', () => {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app')
        cy.get('[data-test="login-button"]').click()
    })

    it('it must fill the form filds right and log in ', () => {
      cy.login('anaemail@email.com', '123456Aa')
    })
  })
  