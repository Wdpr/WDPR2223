using System;
using System.Text;
using Newtonsoft.Json;
using TechTalk.SpecFlow;
using Xunit;
using static Laak.Controllers.BezoekerController;

namespace wdpr.SpecflowTests.Steps
{
    [Binding]
    public class BezoekerControllerSteps
    {
        private static HttpClient client = new HttpClient
        {
            BaseAddress = new Uri("http://localhost:44468/")
        };
        private HttpResponseMessage response;
        private readonly ScenarioContext _scenarioContext;

        public BezoekerControllerSteps(ScenarioContext scenarioContext)
        {
            _scenarioContext = scenarioContext;
        }

        [Given(@"Ik ben een nieuwe gebruiker")]
        public void GivenIkBenEenNieuweGebruiker()
        {
            // geen stap nodig
        }

        // Bezoeker
        [When(@"Ik mijn registratie informatie heb ingevuld als een Bezoeker")]
        public void WhenIkMijnRegistratieInformatieHebIngevuldAlsEenBezoeker()
        {
            var content = new StringContent(JsonConvert.SerializeObject(new RegistreerModel
            {
                Email = "test@test.com",
                Gebruikersnaam = "testuser",
                Wachtwoord = "WDPRtest123!"
            }), Encoding.UTF8, "application/json");
            response = client.PostAsync("api/bezoeker/registreer", content).Result;
        }

        // Medewerker 
        [When(@"Ik mijn registratie informatie heb ingevuld als een Medewerker")]
        public void WhenIkMijnRegistratieInformatieHebIngevuldAlsEenMedewerker()
        {
            var content = new StringContent(JsonConvert.SerializeObject(new RegistreerModel
            {
                Email = "test@test.com",
                Gebruikersnaam = "testuser",
                Wachtwoord = "password",
                Functie = "admin"
            }), Encoding.UTF8, "application/json");
            response = client.PostAsync("api/bezoeker/registreer/medewerker", content).Result;
        }

        [Then(@"mijn account is gemaakt en de status code is (.*)")]
        public void ThenMijnAccountIsGemaaktEnDeStatusCodeIs(int statusCode)
        {
            Assert.Equal(statusCode, (int)response.StatusCode);
        }
    }
}