using System;
using TechTalk.SpecFlow;

namespace Laak.Test.SpecflowTests.steps;

[Binding]
public class BezoekerSteps
{
    private readonly ScenarioContext _scenarioContext;

    public BezoekerSteps(ScenarioContext scenarioContext)
    {
        _scenarioContext = scenarioContext;
    }

    [Given(@"ik ben op de registrerenpagina")]
    public void Givenikbenopderegistrerenpagina()
    {
        _scenarioContext.Pending();
    }

    [When(@"ik vul mijn gebruikersnaam, email en wachtwoord in")]
    public void Whenikvulmijngebruikersnaamemailenwachtwoordin()
    {
        _scenarioContext.Pending();
    }

    [Then(@"ik ben geregistreerd")]
    public void Thenikbengeregistreerd()
    {
        _scenarioContext.Pending();
    }



    [Given(@"ik ben op de inlogpagina")]
    public void Givenikbenopdeinlogpagina()
    {
        _scenarioContext.Pending();
    }

    [When(@"ik vul mijn email en wachtwoord in")]
    public void Whenikvulmijnemailenwachtwoordin()
    {
        _scenarioContext.Pending();
    }

    [Then(@"ik ben ingelogd")]
    public void Thenikbeningelogd()
    {
        _scenarioContext.Pending();
    }

}
