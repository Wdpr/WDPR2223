
describe(
    'Van login pagina naar reservering maken.',() => {
        beforeEach(() => {
            cy.visit('https://localhost:44468/Login')
            cy.fixture('loginTestGebruiker').then((testGebruiker) => {
                cy.get('input[name="EmailAdress"]').type(testGebruiker.Email);
                cy.get('input[name="Password"]').type(testGebruiker.Wachtwoord);
                cy.get('button[type ="submit"]').click();
                cy.wait(1000);
                cy.get('p span').should('have.text', 'testuser');
                cy.get('.buttonInvisible:first').click();
                cy.wait(1000);
                cy.url().should('include', '/voorstelling');
                
            })
                
        })
        
        it('Er wordt een vrije stoel gekozen en naar de volgende pagina genavigeerd ', () => {
            cy.intercept('GET', 'api/reservering', []);
            
            cy.get('button').contains('Bestel hier uw kaarten').click();
            cy.wait(1000);
            cy.url().should('include', '/stoelkiezen');

            cy.get('.stoelInfo').contains('Geen.');
            cy.get('.seat-button.category-1:first').click();
            cy.wait(3000);
            cy.get('.stoelInfo > div > div:first').should('contain', 'Rij');

            cy.get('button').contains('Reserveer').click();
            cy.url().should('include', 'reserveren')
                // en nu?!
        })

        it('Het toont dat elke rang stoelen wordt getoond met de corresponderende kleur', () => {
            cy.get('button').contains('Bestel hier uw kaarten').click();
            cy.wait(1000);
            cy.url().should('include', '/stoelkiezen');

            cy.get('.seat-button.category-1:first').should('have.css', 'border-color', 'rgb(0, 130, 200)');
            cy.get('.seat-button.category-2:first').should('have.css', 'border-color', 'rgb(30, 180, 50)');
            cy.get('.seat-button.category-3:first').should('have.css', 'border-color', 'rgb(255, 60, 60)');

        })


        it('Het toont dat reeds gereserveerde stoelen grijs zijn', () => {
            cy.get('button').contains('Bestel hier uw kaarten').click();
            cy.wait(1000);
            cy.url().should('include', '/stoelkiezen');

            cy.get('.seat-button.category-1:first')
            .then((el) => {
              el[0].classList.add('reserved');
              cy.get(el).should('have.css', 'background-color', 'rgb(128, 128, 128)');
            });
        })

        it('Het toont dat de door de bezoeker geselecteerde stoelen zwart zijn', () => {
            //lege array zodat er geen stoelen gereserveerd zijn
            cy.intercept('GET', 'api/reservering', []);

            cy.get('button').contains('Bestel hier uw kaarten').click();
            cy.wait(1000);
            cy.url().should('include', '/stoelkiezen');

            cy.get('.seat-button.category-1:first')
            .then((el) => {
                el[0].classList.add('selected');
                cy.get(el).should('have.css', 'background-color', 'rgb(0, 0, 0)');
              });
        })
    }
)
