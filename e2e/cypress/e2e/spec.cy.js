describe('burgerplace spec', () => {
  const FRONTEND_URL = "https://burgers-test.ngrok.app"
  // const FRONTEND_URL = process.env.FRONTEND_URL;
  // console.log(`FRONTEND_URL: ${FRONTEND_URL}`);
  // if (!FRONTEND_URL){
  //   throw new Error(JSON.stringify(process.env,null,2));
  //   throw new Error('FRONTEND_URL NOT SET');
  // }
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