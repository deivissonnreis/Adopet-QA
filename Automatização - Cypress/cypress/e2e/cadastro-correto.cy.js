describe('Register page', () => {
  it('it must fill rightly the form filds to complete the register', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.get('[data-test="register-button"]').click()
    cy.get('[data-test="input-name"]').type("Ana Julia")
    cy.get('[data-test="input-email"]').type("anaemail@email.com")
    cy.get('[data-test="input-password"]').type("123456Aa")
    cy.get('[data-test="input-confirm-password"]').type("123456Aa")
    cy.get('[data-test="submit-button"]').click()
  })
})