///<reference types = "Cypress"/>

describe('The sanity test suit for main menu page ', () => {


    const hotel_list_page_url = 'https://www.accesstravel.com/en-US/Hotel/List'
    const cities_list = '#Filter_DestinationId'
    const children_num_field = '#Filter_ChildrenNum'
    const adults_num_field = '#Filter_AdultNum'
    const children_age_1 = '[id="Filter_ChildrensAge[0]"]'
    const children_age_2 = '[id="Filter_ChildrensAge[1]"]'
    const search_button = '[type="submit"]'
    const checkin_field = '[name="Filter.CheckIn"]'
    const checkout_field = '[name="Filter.CheckOut"]'

    beforeEach(() => {
        cy.visit(hotel_list_page_url)
      })
    
    
       it('Chooses Jerusalem on the list', () => {
        cy.get(cities_list).should('be.visible')
        cy.get(cities_list).select('Jerusalem').should('have.value', '8')
      })
      
      it('Chooses London on the list', () => {
        cy.get(cities_list).should('be.visible')
        cy.get(cities_list).select('London').should('have.value', '31')
      })

      it('Chooses New York on the list', () => {
        cy.get(cities_list).should('be.visible')
        cy.get(cities_list).select('New York').should('have.value', '51')
      })


      it('Populates a valid number of children', () => {
        cy.get(children_num_field).clear()
        cy.get(children_num_field).type('2').invoke("val").should('eq', '2')
        cy.get('.hotels-wrap').click()
        cy.get(children_age_1).should('be.visible')
        cy.get(children_age_1).clear().type('6').invoke("val").should('eq', '6')
        cy.get(children_age_2).should('be.visible')
        cy.get(children_age_2).clear().type('3').invoke("val").should('eq', '3')
      })

      it('Populates invalid dates in Check-in field', () => {
        cy.get(checkin_field).clear().type('30-01-2025')
        cy.get(search_button).click()
        cy.contains("The value '30-01-2025' is not valid for CheckIn.").should('be.visible')           
      })

      it('Populates invalid dates in Check-out field', () => {
        cy.get(checkout_field).clear().type('2025-31-01')
        cy.get(search_button).click()
        cy.contains("The value '2025-31-01' is not valid for CheckOut.").should('be.visible')        
      })

      it('Populates invalid number of adults', () => {
        cy.get(cities_list).select('London').should('have.value', '31')
        cy.get(children_num_field).clear().type('1').invoke("val").should('eq', '1')
        cy.get(adults_num_field).clear().type('0').invoke("val").should('eq', '0')
        cy.get(search_button).click()
        cy.contains("Invalid value").should('be.visible')
      })

      it('Populates invalid number of children', () => {
        cy.get(cities_list).select('Jerusalem').should('have.value', '8')
        cy.get(adults_num_field).clear().type('2').invoke("val").should('eq', '2')
        cy.get(children_num_field).clear().type('-1').invoke("val").should('eq', '-1')
        cy.get(search_button).click()
        cy.contains("Invalid number").should('be.visible')
      })

    })