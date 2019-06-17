context('Basic tests', () => {
    beforeEach(() => {
      cy.visit('https://dfehhdd9kceo0.cloudfront.net/')
    })
    it('logging in', () => {
        cy.get('input[name= "username"]').type('vinhais')
        cy.get('input[name= "password"]').type('123456')
        cy.get('button').contains('Login').click()
        cy.get('a[href="/configuration"]').contains("Configurações").click()
        cy.get('img[alt="arrow-down"]').click({ multiple: true })
          
      })
})