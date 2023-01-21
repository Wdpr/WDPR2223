

describe(
    'VoorstellingPage wordt geladen en wordt gefilterd',() => {
        beforeEach(() => {
            cy.visit('https://localhost:44468/voorstelling')
        })
        it('should load the VoorstellingPageContainer', () => {
            cy.get( ".VoorstellingPageContainer").should('exist')
        })

        it('Should load the bigCardsContainer', () => {
            cy.get(".bigCardsContainer").should('exist')
        })

        it('Should show a message if there are no Voorstellingen', () => {
            cy.intercept('GET', 'api/Voorstelling', []);
            cy.visit('https://localhost:44468/voorstelling');
            cy.get('.bigCardsContainer').should('have.text', 'loading...');
        })

        it('filters the performances by genre', () => {
            cy.get('.genreFilter select').select('Dans');
            cy.get('.bigCardsContainer VoorstellingBigCard ').should('have.length.lte', 1);
            cy.get('.bigCardsContainer').should('contain' , 'Dans');
            cy.get('.bigCardsContainer').should('not.contain', 'Musical');
        })
    })

describe (
    'Gebruiker gaat van voorstellingPage naar een specifieke voorstelling', () => {

        it('Should navigate to the correct VoorstellingDetailPage, when the button is clicked', () => {
            cy.visit('https://localhost:44468/voorstelling')
            cy.get('button').contains('Toon Info').click().then(($button) => {
                const id = $button.data('id');
                console.log(id);
            cy.url().should('include', '/voorstelling/' + id);
            })
        })

    }
)