describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
    })
    cy.get('[data-cy=naam-input]').then((input) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      const inputDOM = input[0];
      nativeInputValueSetter.call(inputDOM, 'test');
      inputDOM.dispatchEvent(new Event('change', { bubbles: true }));
    });
  })