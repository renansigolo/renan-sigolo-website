// "Given, When, Then", or "Arrange, Act, Assert"
describe('My First Test', () => {
  it('Visits the Home Page', () => {
    cy.visit('http://localhost:3000')
  })
})
