describe("render voorstelling page", () =>{
 it("renders correctly", () => {
  cy.visit("")
  cy.get("#container").should("exist");
 })
 
})