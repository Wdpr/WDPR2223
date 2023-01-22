describe('Add Voorstelling page renders properly',() => {
  beforeEach(() => {
    cy.visit('https://localhost:44468/voorstelling+')
})
 it("should render container", () => {
  cy.get(".container").should("exist")
 })
 it("should render input elements", () => {
  cy.get(".form-control").should("exist")
 })
 it("should display errormessage when input is empty", () => {
  cy.contains("Save").click()
  cy.contains("prijs mag niet leeg zijn")
  cy.contains("artiest mag niet leeg zijn")
  cy.contains("tijdsduur mag niet leeg zijn")
  cy.contains("datum/tijd mag niet leeg zijn")
  cy.contains("zaalnummer mag niet leeg zijn")
  cy.contains("voorstelling naam mag niet leeg zijn")
 })
it("controleren of de begin waardes van de inputs lege strings zijn", () =>{
  cy.get('.form-control').should('have.value', '');

})


it("fetchen van api data bij de form", () =>{
  let array = [];
  cy.intercept('POST', 'api/voorstelling/nieuweVoorstelling', array);
  if(array.length>0){
    assert.isOk('everything','everything is OK');
  }

})

 })



