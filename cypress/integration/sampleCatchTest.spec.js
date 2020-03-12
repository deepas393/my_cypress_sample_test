/// <reference types="cypress" />

describe('Verify the price of a particular baby product and add to cart ', () => {
    before(function () {
        cy.visit('https://www.catch.com.au/')
    })

    it('verifies the price of bubba blue blanket and add to cart', function () {
        cy.contains('a', 'Kids & Baby').click()
        cy.contains('a', 'Baby Bedding').click({ force: true })

        const inputProductName = 'Bubba Blue 70x90cm Baby Cuddle Blanket - Blue'

        cy.get('.product-flex > div').each(($divs) => {
            const productName = $divs.find('.product--card > .product--title > .product--title-text > .js-product-link').text()

            if (productName.includes(inputProductName)) {
                $divs.find('.product--card > .product--image-container > .product--buy-form--container > .buy-form > button').click()
                cy.get('#mini-cart').click()
                cy.get('.cart-item__name-text').should('have.text', inputProductName)
            }


        })
    })

})