describe('Search functionality', () => {
  it.skip('can search for an asteroid and display its information', () => {
    cy.visit('http://localhost:5173/') 

    cy.get('.SearchInput').type('2021 jg6') 
    cy.get('.SearchButton').eq(0).click() 

    cy.contains('asteroid (2021 JG6) Has a magnitude of 23.99 and was discovered on 2021 JG6', { timeout: 5000 })
    })
})