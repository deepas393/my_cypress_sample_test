/// <reference types="cypress" />

describe('Just a sample test', () => {
    before(function () {
        cy.fixture('test_data').then((data) => {
            this.data = data
        })
        cy.visit('https://www.amazon.com.au/')
    })

    it('search and add a book to cart', function () {
        cy.contains('a', 'Books').click()
        cy.get('#twotabsearchtextbox').type(this.data.bookSearch + '{enter}')
        cy.contains('span', this.data.bookName).click()
        cy.get('#add-to-cart-button').click()
        cy.contains('a', 'Cart').click()
        cy.get('span').should('contain.text', this.data.bookName)
    })

})