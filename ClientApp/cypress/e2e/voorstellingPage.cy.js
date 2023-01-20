// import { VoorstellingBigCard } from "../../src/components/Voorstelling/VoorstellingBigCard"

describe(
    'VoorstellingPage wordt geladen',() => {
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
        beforeEach(() => {
            cy.visit('https://localhost:44468/voorstelling')
        })
        it('Should navigate to the VoorstellingDetailPage, when the button is clicked', () => {
            cy.contains('Toon Info').click();
            cy.url().should('include', '/Voorstelling/');
        })
    })
    