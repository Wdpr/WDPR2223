describe('Add Artiest page check render',() => {
    beforeEach(() => {
      cy.visit('https://localhost:44468/AddArtiest')
  })
   it("should render container", () => {
    cy.get(".container").should("exist")
   })
   it("should render input elements", () => {
    cy.get(".form-control").should("exist")
   })
   it("should display errormessage when input is empty", () => {
    cy.contains("button").click()
    cy.contains("naam van de artiest mag niet leeg zijn")
   
   })
  it("controleren of de begin waardes van de inputs lege strings zijn", () =>{
    cy.get('.form-control').should('have.value', '');
  
  })
  
  
  it("fetchen van api data bij de form", () =>{
    let array = [];
    cy.intercept('POST','api/artiest/NieuweArtiest',array);
    if(array.length>0){
      assert.isOk('everything','everything is OK');
    }

  })
  
   })
  
  