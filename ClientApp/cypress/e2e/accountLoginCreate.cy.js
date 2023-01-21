describe(
    'Loginpage wordt geladen',() => {
        beforeEach(() => {
            cy.visit('https://localhost:44468/Login')
        })

        it('Er wordt geprobeerd in te loggen met onjuiste informatie', () => {
            cy.get( ".totaleLoginForm").should('exist')
        })

        it('Er wordt geprobeerd in the loggen met juiste informatie', () => {
            cy.get( ".totaleLoginForm").should('exist')
        })

        it('should load the totaleLoginForm', () => {
            cy.get('a').contains('Nog geen account?').click()
            cy.url().should('include', '/CreateAccount');
        })
    }

)
    
    
describe(
    'CreateAccount pagina wordt geladen, en er wordt geprobeerd een account te maken', () => {
        beforeEach(() => {
            cy.visit('https://localhost:44468/CreateAccount')
        })

        it('Er wordt een correcte user aangemaakt', () => {

            cy.intercept({
                method: 'POST',
                path: '/api/bezoeker/registreer',
            },
                {body: 'User successfully registered'}).as('register');

            cy.fixture('testGebruiker').then((testGebruiker) => {
            cy.get('input[name="Gebruikersnaam"]').type(testGebruiker.Gebruikersnaam);
            cy.get('input[name="EmailAdress"]').type(testGebruiker.Email);
            cy.get('input[name="Password"]').type(testGebruiker.Wachtwoord);
            cy.get('button[type ="submit"]').click();
            cy.wait('@register');
        })
        })

        it('Er wordt geprobeerd een gebruiker aan te maken met een wachtwoord dat niet voldoet aan de eisen', () => {
        
        })

        it('Er wordt geprobeerd een gebruiker aan te maken met een te kort wachtwoord', () => {
        
        })

        it('Er wordt geprobeerd een gebruiker aan te maken zonder uniek emailadres', () => {
        
        })

        it('Er wordt geklikt op  "Heeft u al een account?" ', () => {
            cy.get('a').contains('Heeft u al een account?').click()
            cy.url().should('include', '/Login');
        })

    }
    
)
    