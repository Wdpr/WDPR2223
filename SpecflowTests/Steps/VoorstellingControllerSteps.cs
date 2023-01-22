using System;
using Xunit;
using TechTalk.SpecFlow;
using Newtonsoft.Json;
using Laak.Models;

namespace wdpr.SpecflowTests.Steps
{
    [Binding]
    public class VoorstellingControllerSteps
    {
        private static HttpClient client = new HttpClient()
        {
            BaseAddress = new Uri("http://localhost:7177/")
        };
        private HttpResponseMessage response;
        private readonly ScenarioContext _scenarioContext;

        public VoorstellingControllerSteps(ScenarioContext scenarioContext)
        {
            _scenarioContext = scenarioContext;
        }

        [Given(@"Ik ben een gebruiker")]
        public void GivenIkBenEenGebruiker()
        {
            // geen stap nodig hiervoor
        }

        [When(@"Ik alle voorstellingen opvraag")]
        public void WhenIkAlleVoorstellingenOpvraag()
        {
            response = client.GetAsync("api/voorstelling").Result;
        }

        [Then(@"Alle Voorstellingen worden geretoured")]
        public void ThenAlleVoorstellingenWordenGeretoured()
        {
            var content = response.Content.ReadAsStringAsync().Result;
            var voorstelling = JsonConvert.DeserializeObject<Voorstelling>(content);
            Assert.NotNull(voorstelling);
        }

        [When(@"Ik vraag om een specifieke voorstelling met een ID")]
        public void WhenIkVraagOmEenSpecifiekeVoorstellingMetEenID()
        {
           response = client.GetAsync("api/voorstelling/1").Result;
        }

        [Then(@"De specifieke voorstelling wordt geretoured")]
        public void ThenDeSpecifiekeVoorstellingWordtGeretoured()
        {
            var content = response.Content.ReadAsStringAsync().Result;
            var voorstelling = JsonConvert.DeserializeObject<Voorstelling>(content);
            Assert.NotNull(voorstelling);
        }

        [Then(@"De status code moet zijn (.*)")]
        public void ThenDeStatusCodeMoetZijn(int statusCode)
        {
            Assert.Equal(statusCode, (int)response.StatusCode);
        }
    }
}
