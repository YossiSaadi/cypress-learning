describe('My First Test', () => {
  it('My First testcase - should do nothing special to do nothing', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise');

    const searchBox = cy.get(`input[type='search']`);
    searchBox.click();
    searchBox.type("ca");

    const products = cy.get(`.product`).should('have.length', 4);
    console.log(products);

  });
  it('My Second testcase - should do nothing special to do nothing', () => {
      
  });
});
