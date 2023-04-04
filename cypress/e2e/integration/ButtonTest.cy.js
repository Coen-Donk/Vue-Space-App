describe('Search functionality', () => {
  it('can search for an asteroid and display its information', () => {
    cy.visit('https://vue-space-app.vercel.app/') 

    cy.get('.SearchInput').type('2021 jg6') 
    cy.get('.SearchButton').eq(0).click() 

    cy.contains('asteroid (2021 JG6) Has a magnitude of 23.99 and was discovered on 2021 JG6', { timeout: 5000 })
    })
})