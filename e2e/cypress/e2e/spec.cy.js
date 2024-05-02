describe('burgerplace spec', () => {
  const FRONTEND_URL = process.env.FRONTEND_URL;

  beforeEach(() => {
    cy.visit(FRONTEND_URL)
  })
  it('Visits Burger Places', () => {})
  it('finds "Add" button', () => {
    cy.get('a').contains('Add')
  })  
  it('clicks "Add" button', () => {
    cy.get('a').contains('Add').click()
  })
  it('enters burger place', () => {
    cy.get('a').contains('Add').click()
    cy.get('input[name=name]').type(`Lil Woody's Burgers & Shakes`)

    cy.get('input[type=submit]').contains('Save').click()
    cy.get('table').contains(`Lil Woody's Burgers & Shakes`)
  })
})