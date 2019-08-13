context('Basic tests', () => {
    beforeEach(() => {
      cy.visit('https://customer.dev.cmvtech.com.br/')
    })
    it('logging in', () => {
        cy.get('input[name= "username"]').type('customer.test')
        cy.get('input[name= "password"]').type('asd@123')
        cy.get('button').contains('Login').click()
        // cy.get('img[alt="Notification"]').click()
        // cy.get('a[href="/notifications"]').click()
        // cy.get('img[alt="Notification"]').click()
        // cy.get('button').contains("Cotações").click()
        // cy.get('button').contains("Pedidos").click()
        // cy.get('button').contains("Alertas").click()
        //cy.get('button').contains("compras").click()
        cy.get('a[href="/shopping-list"]').click()
        //cy.get('a[href="/shopping-list/6/maintenance').click()
        // cy.get('button').contains("Confirmar").click()
        // cy.get('button').contains("OK").click()
        //cy.get('button').contains("preencher").first().click()
        cy.visit('https://customer.dev.cmvtech.com.br/shopping-list/6')
        cy.get('*[alt="check-icon"]').click()
        cy.get('button').contains("confirmar lista de compras").click()
        cy.get('button').contains("enviar cotação").click()
  
        
        

      
      })
})