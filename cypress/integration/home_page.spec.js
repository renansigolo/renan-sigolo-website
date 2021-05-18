describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')

    // Check for profile image
    cy.get('[data-cy=section-profile]')
      .find('img')
      .should('have.attr', 'src')
      .and('be.visible')

    // Check for profile title
    // cy.get('[data-cy=section-profile]')
    // .find('h1')
    // .should('contain.text')

    // Check for profile text
    // cy.get('[data-cy=section-profile]')
    // .find('p')
    // .should('contain.text')

    cy.get('[data-cy=social-media-list]').within(() => {
      // In this within, the root is now the ul DOM element
      // cy.root().children().should('have.length', 5)

      cy.root().children()
        .should('have.length', 5)
        .each(($li, index, $lis) => {
          return 'something else'
        })
        // .then(($lis) => {
        //   expect($lis).to.have.length(5) // true
        // })

   // Iterate through each 'li'

      // cy.get('a').should('have.attr', 'href', 'https://google.com')
    })
  })
})
