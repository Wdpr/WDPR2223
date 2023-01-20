describe(
    'Homepage wordt geladen',() => {
        beforeEach(() => {
            cy.visit('https://localhost:44468')
        })
        it('should load the HomePageInfoContainer', () => {
           
            cy.get( ".HomePageInfoContainer").should('exist')
        })
        it('Should load the voorstellingMiniCards', () => {
            cy.get(".voorstellingMiniCards").should('exist')
        })
        it('Should load a maximum of 4 voorstellingen', () => {
            cy.get(".voorstellingMiniCards").children().should('have.length.lte', 4)
        })
        it('Should show the username if there is a logged in user', () => {
            sessionStorage.setItem('gebruiker', JSON.stringify({ userName: 'testuser' }));
            cy.reload();
            cy.get('p span').should('have.text', 'testuser');
        })
        it('Should NOT show the username if there is NO logged in user', () => {
            sessionStorage.removeItem('gebruiker');
            cy.reload();
            cy.get('p span').should('not.exist');
        })
        it('Should navigate to the Programmering, when the href is clicked', () => {
            cy.get('a[href="/Voorstelling"]').click();
            cy.url().should('include', '/Voorstelling');
        })
    }
)
