describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
