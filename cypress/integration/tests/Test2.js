describe('My Third Test', () => {
  it('My First testcase - should do nothing special to do nothing', () => {
    const productsToBuy = ['Carrot', 'Cauli'];
    cy.visit('https://rahulshettyacademy.com/seleniumPractise');

    cy.get(`input[type='search']`).type('ca');
    cy.wait(2000);

    cy.get('.products').as('productsList');
    cy.get('@productsList')
      .find('.product').as('product');

    cy.get('@product').each(($product, index, $list) => {
      const productTitle = $product.text();
      productsToBuy.forEach((product) => {
        if (productTitle.includes(product)) {
          cy.wrap($product).find('.product-action').click();
        }
      });
    });

    cy.get('.cart-icon').as('cart');
    cy.get('@cart').click();

    cy.get('.cart-items').as('all-items');
    cy.get('@all-items')
      .find('.cart-item').as('item');

    const itemsOnCart = [];
    cy.get('@item').each(($item) => {
      const itemName = $item.text();
      itemsOnCart.push(itemName);
    });

    cy.contains('PROCEED TO CHECKOUT').click();
    cy.get('iframe').ifra
  })
});
