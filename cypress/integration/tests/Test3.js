describe('My Fourth Test', () => {
  // it('CHECKBOXES', () => {
  //   cy.visit('https://rahulshettyacademy.com/AutomationPractice');
  //
  //   cy.get('#checkbox-example').as('checkbox-section');
  //   cy.get('@checkbox-section').find('label').as('checkbox-options');
  //   // cy.get('@checkbox-options').find('input').each(($checkbox) => {
  //   //   const checkboxLabel = $checkbox.val();
  //   //   cy.log(checkboxLabel);
  //   //   if (checkboxLabel.includes('option1')) {
  //   //     cy.wrap($checkbox).check().should('be.checked');
  //   //   }
  //   // })
  //   cy.get('@checkbox-options').find('input').first(($checkbox) => {
  //     $checkbox.val().includes('option1');
  //   }).then((checkbox) => {
  //     cy.wrap(checkbox).check().should('be.checked');
  //     cy.wrap(checkbox).uncheck().should('not.be.checked');
  //   });
  //
  //   cy.get('@checkbox-options').find('input').as('all-checkboxes');
  //   cy.get('@all-checkboxes').check(['option2', 'option3']).should('be.checked');
  // });

  it('DROPDOWNS', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice');

    cy.get('select#dropdown-class-example')
      .select('Option2')
      .should('have.value', 'option2');
    // .should('be.selected')

    cy.get('input#autocomplete')
      .type('ind');
    cy.get('.ui-menu')
      .as('dynamic-dropdown-autocomplete-menu')
      .should('be.visible');
    cy.get('@dynamic-dropdown-autocomplete-menu')
      .find('.ui-menu-item')
      .each(($option) => {
        const optionName = $option.text();
        if (optionName === 'Indonesia') {
          cy.wrap($option).click()
        }
      });

    cy.get('input#hide-textbox').as('hide-textbox');
    cy.get('input#show-textbox').as('show-textbox');
    cy.get('@show-textbox').click();
    cy.get('input#displayed-text').as('element-to-check-visibility');
    cy.get('@element-to-check-visibility').should('be.visible');
    cy.get('@hide-textbox').click();
    cy.get('@element-to-check-visibility').should('not.be.visible');
    cy.get('@show-textbox').click();
    cy.get('@element-to-check-visibility').should('be.visible');

    cy.get('#radio-btn-example').as('radio-button-section');
    cy.get('@radio-button-section').find('label').each(($radio) => {
      const radioOptionName = $radio.text();
      if (radioOptionName.includes('Radio2')) {
        cy.wrap($radio).find('input').check().should('be.checked');
      }
    })


  });
});
