describe(
    'Loginpage wordt geladen',() => {
        beforeEach(() => {
            cy.visit('https://localhost:44468/Login')
        })

        it('Er wordt response code 401 gestuurd als er wordt geprobeerd in te loggen met onjuiste informatie', () => {
            cy.get( ".totaleLoginForm").should('exist')
           
            cy.fixture('testGebruiker').then((testGebruiker) => {
                cy.get('input[name="EmailAdress"]').type(testGebruiker.Email);
                cy.get('input[name="Password"]').type(testGebruiker.Wachtwoord);
                cy.get('button[type ="submit"]').click();
                cy.wait(1000);
                cy.request({
                    method: 'POST',
                    url: '/api/bezoeker/login',
                    body: testGebruiker,
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.eq(401);
                });
                
            })
        })

        it('Er wordt response code 200 gestuurd als er wordt geprobeerd in the loggen met juiste informatie', () => {
            cy.get( ".totaleLoginForm").should('exist')

            cy.fixture('loginTestGebruiker').then((testGebruiker) => {
                cy.get('input[name="EmailAdress"]').type(testGebruiker.Email);
                cy.get('input[name="Password"]').type(testGebruiker.Wachtwoord);
                cy.get('button[type ="submit"]').click();
                cy.wait(1000);
                cy.request({
                    method: 'POST',
                    url: '/api/bezoeker/login',
                    body: testGebruiker,
                    failOnStatusCode: false
                }).then((response) => {
                    expect(response.status).to.eq(200);
                });
            })
        })

        it('Er wordt de juiste alert box getoond als er wordt geprobeerd in te loggen met een onjuist email adres', () => {
        
            cy.get('input[name="EmailAdress"]').type('testuser12345');
            cy.get('input[name="Password"]').type('Testing123!');
            cy.get('button[type ="submit"]').click();
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains('email is niet geldig');
                })
        })


        it('Er wordt de juiste alert box getoond als er wordt geprobeerd in te loggen met een onjuist wachtwoord', () => {
            cy.get('input[name="EmailAdress"]').type('testuser12345@mail.com');
            cy.get('input[name="Password"]').type('test');
            cy.get('button[type ="submit"]').click();
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains('wachtwoord moet minimaal 6 karakters lang zijn');
                })
        })

    
    }

)

    
describe(
    'CreateAccount pagina wordt geladen, en er wordt geprobeerd een account te maken', () => {
        beforeEach(() => {
            cy.visit('https://localhost:44468/CreateAccount')
        })

        it('Er wordt response code 200 gestuurd als er een correcte user wordt aangemaakt', () => {

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
            cy.get('@register').its('response.statusCode').should('eq', 200);
            })
        })

        it('Er wordt de juiste alert box getoond als er wordt geprobeerd een gebruiker aan te maken met een wachtwoord dat niet voldoet aan de eisen', () => {
        
            cy.get('input[name="Gebruikersnaam"]').type('testuser12345');
            cy.get('input[name="EmailAdress"]').type('testuser12345@mail.com');
            cy.get('input[name="Password"]').type('test');
            cy.get('button[type ="submit"]').click();
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains('U moet voldoen aan de eisen voor de invoervelden');
                })
        })

        

        it('Er wordt de juiste alert box getoond als er wordt geprobeerd een gebruiker aan te maken zonder correct emailadres', () => {
            cy.get('input[name="Gebruikersnaam"]').type('testuser12345');
            cy.get('input[name="EmailAdress"]').type('testuser12345mail');
            cy.get('input[name="Password"]').type('Testing123!');
            cy.get('button[type ="submit"]').click();
            cy.on('window:alert',(txt)=>{
                expect(txt).to.contains('email is niet geldig');
                })
        })

        

    }
    
)
    