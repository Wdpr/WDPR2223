using System;
using System.Net;
using RestSharp;
using Laak.Models;
using Moq;
using TechTalk.SpecFlow;
using Laak.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;

namespace Laak.Tests.Steps
{
    [Binding]
    public class BezoekerSteps
    {
        private readonly ScenarioContext _scenarioContext;
        private readonly RestClient client; 

        private BezoekerController.LoginModel LoginModel = new BezoekerController.LoginModel();
        private BezoekerController.RegistreerModel RegistreerModel = new BezoekerController.RegistreerModel();
        private IActionResult result;

        public BezoekerSteps(ScenarioContext scenarioContext, RestClient client)
        {
            _scenarioContext = scenarioContext;
            this.client = client;
        }

        // test van het registreren van een bezoeker
        [Given(@"een bezoeker heeft geen account")]
        public void GivenEenBezoekerHeeftGeenAccount()
        {
            // het maken van een account is niet nodig
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
        public void WhenDeBezoekerDeRequestVerstuurdRegistreer()
        {
            // stuur request naar de controller
        }
        [Then(@"wordt er een account gemaakt")]
        public void ThenWordtErEenAccountGemaakt()
        {
            result.Should().BeOfType<OkResult>();
        }

        // test voor het inloggen van een bezoeker
        [Given(@"een bezoeker heeft een account")]
        public void GivenEenBezoekerHeeftEenAccount()
        {
            _scenarioContext.Pending();
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
            _scenarioContext.Pending();
        }
        [Then(@"de bezoeker is ingelogd")]
        public void ThenDeBezoekerIsIngelogd()
        {
            _scenarioContext.Pending();
        }
    }
}