///<reference types = "Cypress"/>

describe('The sanity test suit for main menu page ', () => {
  
  const main_menu_page_url = 'https://www.accesstravel.com/en-US/Home/Index'
  const hotels_url = 'https://www.accesstravel.com/en-US/Hotel/List'
  const guides_url = 'https://www.accesstravel.com/en-US/Guide/List?DestinationId=2'
  const tours_url = 'https://www.accesstravel.com/en-US/Tour/List?DestinationId=2'
  const thingstodo_url = 'https://www.accesstravel.com/en-US'
  const menu = '[id="burger"]'
  const login_button = ':nth-child(3) > :nth-child(1) > a'
  const login_page_url = 'https://www.accesstravel.com/en-US/Account/Login'
  const sign_button = '.mobile-menu > :nth-child(3) > :nth-child(2) > a'
  const signup_page_url = 'https://www.accesstravel.com/en-US/Account/Register'

  beforeEach(() => {
    cy.visit(main_menu_page_url)
  })


   it('Verify clicking the Hotels category', () => {
    cy.get('.hotels').click()
    cy.url().should('eq', hotels_url)    
  })

  it('Verify clicking the Guides category', () => {
    cy.get('.guides').click()
    cy.url().should('eq', guides_url)
  })

  it('Verify clicking the Tours category', () => {
    cy.get('.js-list-tours').click()
    cy.url().should('eq', tours_url)
  })

  it('Verify clicking the Things to do category', () => {
    cy.get('.attraction-link').click()
    cy.url().should('eq', thingstodo_url)
  })


  it('Verify click on Login opens Login page', () => {
    cy.get(menu).click()
    cy.get(login_button).click()
    cy.url().should('eq', login_page_url)  
  })

  it('Verify click on Sign up opens Login page', () => {
    cy.get(menu).click()
    cy.get(sign_button).click()
    cy.url().should('eq', signup_page_url)  
  })
})