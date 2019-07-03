context('Basic tests', () => {
    beforeEach(() => {
      cy.visit('https://d302twpyar0dfa.cloudfront.net')
    })
    it('logging in', () => {
        cy.get('input[name= "username"]').type('customer.test')
        cy.get('input[name= "password"]').type('asd@123')
        cy.get('button').contains('Login').click()
        cy.get('img[alt="Notification"]').click()
        cy.get('a[href="/notifications"]').click()
        cy.get('img[alt="Notification"]').click()
        cy.get('button').contains("Cotações").click()
        cy.get('button').contains("Pedidos").click()
        cy.get('button').contains("Alertas").click()
        


      
      })
})