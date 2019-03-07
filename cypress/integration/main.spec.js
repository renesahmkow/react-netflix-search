describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the correct title', () => {
    cy.title().should('equal', 'Netflix Search')
  })

  it('has the correct header text', () => {
    cy.get('[data-cy="header-title"]').should('contain', 'Neflixsearch')
  })

  it('has the correct footer text', () => {
    cy.get('[data-cy="footer-text"]').should('contain', 'Home')
  })
})

describe('Card', () => {
  it('shows an image on the background', () => {
    cy.get('[data-cy="card"]').should('have.css', 'background-image')
  })

  it('has a movietitle', () => {
    cy.get('[data-cy="cardtitle"]').should('have', 'text')
  })
})
