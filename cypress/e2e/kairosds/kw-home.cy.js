describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.kairosds.com/')

    cy.clearCookies()

    cy.get('kw-cookies-notice')
      .shadow()
      .find('[aria-label="Accept cookies"]')
      .click()
  })
})