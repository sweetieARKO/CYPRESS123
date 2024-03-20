describe('template spec', () => {
 
  it('passes', () => {
  cy.visit("https://demo.opencart.com/index.php?route=account/register&language=en-gb") 
  cy.get("#input-firstname").type("Abigail")
  cy.get("#input-lastname").type("Arko")
  cy.get("#input-email").type("abigial@gmail.com")
  cy.get("#input-password").type("abigail22q2&Arko")
  cy.get(".float-end > .btn").click()
  })
   
  it('wrong email ', () => {
    cy.visit("https://demo.opencart.com/index.php?route=account/register&language=en-gb") 
    cy.get("#input-firstname").type("Abigail")
    cy.get("#input-lastname").type("Arko")
    cy.get("#input-email").type("abigialgmail.com")
    cy.get("#input-password").type("abigail22q2&Arko")
    cy.get(".float-end > .btn").click()
    })
    
})
