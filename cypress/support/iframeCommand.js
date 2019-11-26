Cypress.Commands.add(
  'iframeLoaded',
  { prevSubject: 'element' },
  ($iframe) => {
    const contentWindow = $iframe.prop('contentWindow');
    return new Promise(resolve => {
      if (
        contentWindow &&
        contentWindow.document.readyState === 'complete'
      ) {
        resolve(contentWindow);
      } else {
        $iframe.on('load', () => {
          resolve(contentWindow);
        });
      }
    });
  });

Cypress.Commands.add(
  'getInDocument',
  { prevSubject: 'document' },
  (document, selector) => Cypress.$(selector, document)
);

// usage:
/*cy.get('iframe')
  .iframeLoaded()
  .its('document')
  .getInDocument('button')
  .trigger('click')*/

// You might also have to add "chromeWebSecurity": false to the cypress.json. Read about it here:
// https://docs.cypress.io/guides/guides/web-security.html
