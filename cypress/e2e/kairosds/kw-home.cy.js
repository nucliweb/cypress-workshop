describe('Visit Home', () => {
  it('Accept Consents', () => {
    cy.visit('https://www.kairosds.com/')

    cy.clearCookies()
    cy.clearLocalStorage()

    cy.get('kw-cookies-notice')
      .shadow()
      .find('[aria-label="Accept cookies"]')
      .click()
  })

  it('Consents are accepted', () => {
    //...
  })
})