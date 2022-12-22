
using System.ComponentModel.DataAnnotations;
using Laak.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Laak.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BezoekerController : ControllerBase
{

    private UserManager<Bezoeker> userManager;
    private SignInManager<Bezoeker> signInManager;

    public BezoekerController(UserManager<Bezoeker> userManager, SignInManager<Bezoeker> signInManager)
    {
        this.userManager = userManager;
        this.signInManager = signInManager;
    }

    [HttpGet]
    public int get()
    {
        return 2;
    }

    [HttpPost]
    [Route("registreer")]
    public async Task<IActionResult> registreer(Bezoeker bezoeker)
    {
        Console.WriteLine("test");
        // hier wordt doormiddel van de usermanager een nieuwe bezoeker gemaakt. We geven de bezoeker mee en moeten daarbij specifiek het wachtwoordt ook meegegeven 
        // het wachtwoord geven we mee om het te checken of het een sterk wachtwoord is. 
        var resultaat = await userManager.CreateAsync(bezoeker, bezoeker.PasswordHash);
        // het resultaat kan een error bevatten, info over het wachtwoord dat sterker moet of dat het goed is gegaan. En dat geven we terug.
        return resultaat.Succeeded ? StatusCode(201) : new BadRequestObjectResult(resultaat);
        // vb van registreer body:
        /*
        {
        "UserName" : "Peter",
        "Email" : "peter@mail.com",
        "PasswordHash" : "WDpr123!",
        "intresse": "Comedy"
        }
        */
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
            return Ok();
        }
        return Unauthorized();
        // vb van login post body:
        /*
        {
        "email" : "Peter",
        "Wachtwoord" : "WDpr123!"
        }
        */
    }


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