/*describe('My First Test', () => {
  it('My First testcase - should do nothing special to do nothing', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise');

    // cy.get(`input[type='search']`).then(($input) => {
    //   const input = cy.wrap($input);
    //   input.click().type('ca');
    //
    //   cy.get('.products').then(($products) => {
    //     debugger;
    //
    //     $products.find('.product').each(($el, index, $list) => {
    //       debugger;
    //       const elementText = cy.wrap($el).find('.product-name').text();
    //       if (elementText.includes('Carrot')) {
    //         cy.wrap($el).click();
    //       }
    //     });
    //   })
    // });

    // cy.get(`input[type='search']`).type('ca');
    // cy.get('.products')
    //   .find('.product')
    //   .each(($product, index, $list) => {
    //     const name = $product.find('.product-name').text();
    //     if (name.includes('Capsi')) {
    //       cy.wrap($product).find('button').click();
    //       cy.wrap($product).should('contain', 'ADDED');
    //     }
    //   });

    // const logo = cy.get('.brand').then($logoElement => console.log($logoElement.text()));

    cy.get('.brand').as('logo');
    cy.get('@logo').click().should('have.text', 'GREENKART');
  });
});*/

// const iterateByName = (list, name) => {
//   list.each(($element, index, $list) => {
//     const name = $element.text();
//     if ($element.includes(name)) {
//       return cy.wrap($element);
//     }
//   });
//   return null;
// };


// const products = cy.get(`.product`).should('have.length', 4);

// const products = cy.get(`.product`);
// const visibleProducts = products.get(':visible');
// visibleProducts.should('have.length', 4);

// const productsParent = cy.get('.products');
// const productsFromProductsParent = productsParent.find('.product');
// productsFromProductsParent.should('have.length', 4);
// productsFromProductsParent.contains("Carrot").click();
// productsFromProductsParent.eq(2).contains("ADD TO CART").click().should('be.eq', 'Added');

// const productsParent = await cy.get('.products');
// const productsFromProductsParent = await productsParent.find('.product');

// productsFromProductsParent.each(($el, index, $list) => {
//   if ($el.find('product-name').text().includes('Carrot')) {
//     cy.wrap($el).click();
//   } else {
//     throw new Error("Not Found");
// }
// });

describe('My Second Test', () => {
  it('My First testcase - should do nothing special to do nothing', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise');

    cy.get(`input[type='search']`).type('ca');
    cy.wait(2000);
    cy.get('.products').as('productsList');
    cy.get('@productsList')
      .find('.product').as('product');
    cy.get('@product').each(($product, index, $list) => {
      const productTitle = $product.text();
      if (productTitle.includes('Carrot'))
        cy.wrap($product).find('.product-action').click();
    });

  })
});
