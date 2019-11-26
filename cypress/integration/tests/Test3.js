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

  // it('DROPDOWNS', () => {
  //   cy.visit('https://rahulshettyacademy.com/AutomationPractice');
  //
  //   cy.get('select#dropdown-class-example')
  //     .select('Option2')
  //     .should('have.value', 'option2');
  //   // .should('be.selected')
  //
  //   cy.get('input#autocomplete')
  //     .type('ind');
  //   cy.get('.ui-menu')
  //     .as('dynamic-dropdown-autocomplete-menu')
  //     .should('be.visible');
  //   cy.get('@dynamic-dropdown-autocomplete-menu')
  //     .find('.ui-menu-item')
  //     .each(($option) => {
  //       const optionName = $option.text();
  //       if (optionName === 'Indonesia') {
  //         cy.wrap($option).click()
  //       }
  //     });
  //
  //   cy.get('input#hide-textbox').as('hide-textbox');
  //   cy.get('input#show-textbox').as('show-textbox');
  //   cy.get('@show-textbox').click();
  //   cy.get('input#displayed-text').as('element-to-check-visibility');
  //   cy.get('@element-to-check-visibility').should('be.visible');
  //   cy.get('@hide-textbox').click();
  //   cy.get('@element-to-check-visibility').should('not.be.visible');
  //   cy.get('@show-textbox').click();
  //   cy.get('@element-to-check-visibility').should('be.visible');
  //
  //   cy.get('#radio-btn-example').as('radio-button-section');
  //   cy.get('@radio-button-section').find('label').each(($radio) => {
  //     const radioOptionName = $radio.text();
  //     if (radioOptionName.includes('Radio2')) {
  //       cy.wrap($radio).find('input').check().should('be.checked');
  //     }
  //   })
  //
  //
  // });

  // it('ALERTS', () => {
  //   cy.visit('https://rahulshettyacademy.com/AutomationPractice');
  //
  //   cy.get('input#alertbtn').as('alert-button');
  //   cy.get('input#confirmbtn').as('confirm-button');
  //
  //   cy.get('@alert-button').click();
  //   // cypress clicking automatically on OK on the alert
  //   cy.get('@confirm-button').click();
  //   // cypress clicking automatically on OK on the alert
  //
  //   cy.get('@alert-button').click();
  //   cy.on('window:alert', (str) => { // like window:alert there are more browser actions, cypress supports all of them
  //
  //     // Mocha
  //     expect(str).to.equal('Hello , share this practice page and share your knowledge');
  //   });
  //
  //   cy.get('@confirm-button').click();
  //   cy.on('window:confirm', (str) => {
  //
  //     // Mocha
  //     expect(str).to.equal('Hello , Are you sure you want to confirm?');
  //   });
  // });

  // it('TABS', () => {
  //   cy.visit('http://qaclickacademy.com/practice.php');
  //
  //   cy.get('a#opentab').as('open-tab-button');
  //   cy.get('@open-tab-button').invoke('removeAttr', 'target').click();
  //
  // });

  // it('NAVIGATION', () => {
  //   cy.visit('http://qaclickacademy.com/practice.php');
  //
  //   cy.get('a#opentab').as('open-tab-button');
  //   cy.get('@open-tab-button').invoke('removeAttr', 'target').click();
  //   cy.url().should('not.include', 'practice.php');
  //   cy.go('back');
  // });

  it('NAVIGATION', () => {
    /*cy.visit('https://my-test-mb-applitools.dud4.co/home');

    cy.get(`[type='text']`).type('itai');
    cy.get(`[type='password']`).type('abcd1234');
    cy.get(`[type='submit']`).click();
    cy.get(`#addD1SiteBtnEmptyDashboard`).click();*/


    // cy.get('a#opentab').as('open-tab-button');
    // cy.get('@open-tab-button').invoke('removeAttr', 'target').click();
    // cy.url().should('not.include', 'practice.php');
    // cy.go('back');
  });

  // it('WEB TABLES', () => {
  //   cy.visit('https://rahulshettyacademy.com/AutomationPractice');
  //
  //   cy.get('table#product').as('table-section');
  //   cy.get('@table-section')
  //     .find('tr td:nth-child(2)')
  //     .each(($row, index, $list) => {
  //       const courseName = $row.text();
  //       if (courseName.includes('Python')) {
  //         // cy.get('tr td:nth-child(2)').eq(index).next().then(($price) => {
  //         cy.wrap($row).next().then(($price) => {
  //           const price = $price.text();
  //           cy.log(price);
  //         });
  //       }
  //     })
  // });

  // it('MOUSE HOVER POPUPS', () => {
  //   cy.visit('https://rahulshettyacademy.com/AutomationPractice');
  //
  //   // there's no need for that button as the menu appears once we hover over it, this occurs with 'menu'.invoke(show)
  //   cy.get('button#mousehover').as('mousehover-button');
  //   cy.get('.mouse-hover-content').as('mousehover-menu');
  //   cy.get('@mousehover-menu').invoke('show');
  //   cy.get('@mousehover-menu').contains('Top');
  //   cy.url().should('contain', 'top');
  //
  //   // it's also possible to force the click without the item is visible (!!)
  //   cy.contains('Top').click({force: true});
  //   cy.url().should('contain', 'top');
  // });
});
