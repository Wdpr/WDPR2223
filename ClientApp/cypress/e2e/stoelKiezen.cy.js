describe(
    'stoelKiezen wordt geladen na het doorklikken vanaf een voorstellingInfoPagina', () => {
        cy.visit('https://localhost:44468/voorstelling/11')
        cy.get('button').contains('Bestel hier uw kaarten').click()
    }
)