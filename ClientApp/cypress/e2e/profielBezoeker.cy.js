describe(
    'Profiel pagina wordt geladen als een bezoeker inlogt', () => {
        beforeEach(() => {
            cy.visit('https://localhost:44468/Login')
            cy.fixture('loginTestGebruiker').then((testGebruiker) => {
                cy.get('input[name="EmailAdress"]').type(testGebruiker.Email);
                cy.get('input[name="Password"]').type(testGebruiker.Wachtwoord);
                cy.get('button[type ="submit"]').click();
                cy.wait(1000);
                cy.get('p span').should('have.text', 'testuser');
                cy.visit('https://localhost:44468/Profiel')
                
            })
        })

        it('Het juiste account wordt geladen', () => {
            cy.visit('https://localhost:44468/Profiel')
            cy.get( ".gebruikerGegevens").should('contain', 'testuser')
        })

        it('Er wordt een reservering getoond ', () => {
            cy.visit('https://localhost:44468/Profiel')
            cy.fixture('testReservering.json').then(reserveringen => {
                cy.intercept('GET', 'api/reservering', [reserveringen]).as('reserveringen')
            });
            cy.get( ".mijnReserveringen").should('contain', 'testVoorstelling')
        })

        it('Het component voor het wijzigen van gegevens wordt zichtbaar na het klikken van de button', () => {
            cy.visit('https://localhost:44468/Profiel')
            cy.get('.wijzigGegevensContainer').should('not.be.visible');
            cy.get('button').contains('Wijzig gegevens').click();
            cy.get('.wijzigGegevensContainer').should('be.visible');
        })


    }
)
