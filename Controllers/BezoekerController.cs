
using System.ComponentModel.DataAnnotations;
using Laak.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Laak.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BezoekerController : ControllerBase
{
    private UserManager<IdentityUser> userManager;
    private SignInManager<IdentityUser> signInManager;

    public BezoekerController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
    {
        this.userManager = userManager;
        this.signInManager = signInManager;
    }

    [HttpGet]
    public IEnumerable<IdentityUser> GetBezoekers()
    {
        return userManager.Users.ToList();
    }

    [HttpPost]
    [Route("registreer")]
    public async Task<IActionResult> RegistreerBezoeker(RegistreerModel registreerModel)
    {
        Console.WriteLine(registreerModel.ToString());

        var bezoeker = new Bezoeker
        {
            Email = registreerModel.Email,
            UserName = registreerModel.Gebruikersnaam,
            PasswordHash = registreerModel.Wachtwoord,
        };
        Console.WriteLine("Bezoeker aangemaakt");
        // hier wordt doormiddel van de usermanager een nieuwe bezoeker gemaakt. We geven de bezoeker mee en moeten daarbij specifiek het wachtwoordt ook meegegeven 
        // het wachtwoord geven we mee om het te checken of het een sterk wachtwoord is. 
        var resultaat = await userManager.CreateAsync(bezoeker, bezoeker.PasswordHash);
        // het resultaat kan een error bevatten, info over het wachtwoord dat sterker moet of dat het goed is gegaan. En dat geven we terug.
        return resultaat.Succeeded ? StatusCode(201) : new BadRequestObjectResult(resultaat);
    }

    [HttpPost]
    [Route("registreer/medewerker")]
    public async Task<IActionResult> RegistreerMedewerker(RegistreerModel registreerModel)
    {
        Console.WriteLine(registreerModel.ToString());

        var medewerker = new Medewerker
        {
            Email = registreerModel.Email,
            UserName = registreerModel.Gebruikersnaam,
            PasswordHash = registreerModel.Wachtwoord,
            Functie = registreerModel.Functie,
        };
        Console.WriteLine("Medewerker aangemaakt");
        // hier wordt doormiddel van de usermanager een nieuwe bezoeker gemaakt. We geven de bezoeker mee en moeten daarbij specifiek het wachtwoordt ook meegegeven 
        // het wachtwoord geven we mee om het te checken of het een sterk wachtwoord is. 
        var resultaat = await userManager.CreateAsync(medewerker, medewerker.PasswordHash);
        // het resultaat kan een error bevatten, info over het wachtwoord dat sterker moet of dat het goed is gegaan. En dat geven we terug.
        return resultaat.Succeeded ? Ok() : new BadRequestObjectResult(resultaat);
    }


    [HttpPost]
    [Route("login")]
    public async Task<IActionResult> login(LoginModel loginModel)
    {
        // de userManager zoek in de Context naar een Idetity met dezelfde Naam. Dit betekent wel dat iedereen een unieke naam moet hebben. Dit kan wel verholpen worden
        var bezoeker = await userManager.FindByEmailAsync(loginModel.Email);
        // hier wordt nagegaan of de bezoeker opgegeven in het loginModel ook kloppend is met die in de context door een hele simpele wachtwoord check.
        if (bezoeker != null && await userManager.CheckPasswordAsync(bezoeker, loginModel.Wachtwoord))
        {
            // hier wordt de bezoeker ingelogd. De true zorgt ervoor dat de bezoeker ingelogd blijft. en een cookie krijgt die in de controller gecontroleerd kan worden.
            await signInManager.SignInAsync(bezoeker, true);
            Console.WriteLine("ingelogd als " + bezoeker.UserName);
            return Ok(bezoeker);
        }
        return Unauthorized();
    }

    [HttpPost]
    [Route("update/email")]
    public async Task<IActionResult> UpdateBezoekerEmail(UpdateEmailModel updateModel)
    {
        var bezoeker = await userManager.FindByEmailAsync(updateModel.CurrentEmail);
        if (bezoeker == null)
        {
            return NotFound();
        }

        bezoeker.Email = updateModel.NewEmail;
        var result = await userManager.UpdateAsync(bezoeker);
        if (result.Succeeded)
        {
            return NoContent();
        }
        else
        {
            return new BadRequestObjectResult(result);
        }
    }

    public class UpdateEmailModel
    {
        public string CurrentEmail { get; set; }
        public string NewEmail { get; set; }
    }


    public class LoginModel
    {
        // dit model bestaat om ervoor te zorgen dat de post body in de front-end niet ingewikkeld hoef te worden
        // De required stuurt eventueel bericht terug met de errorMessage als het niet is ingevuld.
        [Required(ErrorMessage = "Email is verplicht")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Wachtwoord is verplicht")]
        public string Wachtwoord { get; set; }
    }

    public class RegistreerModel
    {
        public string Gebruikersnaam { get; set; }
        public string Email { get; set; }
        public string Wachtwoord { get; set; }
        public string Functie { get; set; }
    }
    }