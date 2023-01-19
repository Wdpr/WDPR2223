using System;
using System.Net;
using RestSharp;
using Laak.Models;
using Moq;
using Xunit;
using TechTalk.SpecFlow;
using Laak.Controllers;
using System.Text;
using Newtonsoft.Json;

namespace Laak.Tests.Steps
{
    [Binding]
    public class BezoekerSteps
    {
        private readonly ScenarioContext _scenarioContext;
        private RestClient client;
        private RestResponse response;

        private BezoekerController.LoginModel LoginModel;
        private BezoekerController.RegistreerModel RegistreerModel = new BezoekerController.RegistreerModel();

        public BezoekerSteps(ScenarioContext scenarioContext)
        {
            _scenarioContext = scenarioContext;
        }

        // test van het registreren van een bezoeker
        [Given(@"een bezoeker heeft geen account")]
        public void GivenEenBezoekerHeeftGeenAccount()
        {
            //
        }
        [When(@"de bezoeker de username peter invult")]
        public void WhenDeBezoekerDeUsernamePeterInvult()
        {
            RegistreerModel.Gebruikersnaam = "peter";
        }
        [When(@"de bezoeker de email peter@mail.com invult")]
        public void WhenDeBezoekerDeEmailPeterMail_ComInvult()
        {
            RegistreerModel.Email = "peter@mail.com";
        }
        [When(@"de bezoeker het wachtwoord WDpr123! invult")]
        public void WhenDeBezoekerHetWachtwoordWDprInvult()
        {
            RegistreerModel.Wachtwoord = "WDpr123!";
        }
        [When(@"de bezoeker de registreer request verstuurd")]
        public async void WhenDeBezoekerDeRequestVerstuurdRegistreer()
        {
            var client = new RestClient("http://localhost:7177");
            var request = new RestRequest("/api/bezoeker/registreer", Method.Post);
            request.AddJsonBody(RegistreerModel);
            response = await client.ExecuteAsync(request);
        }
        [Then(@"wordt er een account gemaakt")]
        public void ThenWordtErEenAccountGemaakt()
        {
            // voor een of andere reden doet assert het niet
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        // test voor het inloggen van een bezoeker
        [Given(@"een bezoeker heeft een account")]
        public void GivenEenBezoekerHeeftEenAccount()
        {

        }
        [When(@"de bezoeker zijn email (.*) invult")]
        public void WhenDeBezoekerZijnEmailPeterMail_ComInvult(string eamil)
        {
            LoginModel.Email = eamil;
        }
        [When(@"de bezoeker zijn wachtwoord (.*) invult")]
        public void WhenDeBezoekerZijnWachtwoordWDprInvult(string wachtwoord)
        {
            LoginModel.Wachtwoord = wachtwoord;
        }
        [When(@"de bezoeker de login request verstuurd")]
        public void WhenDeBezoekerDeRequestVerstuurdLogin()
        {
        }
        [Then(@"de bezoeker is ingelogd")]
        public void ThenDeBezoekerIsIngelogd()
        {
        }
    }
}