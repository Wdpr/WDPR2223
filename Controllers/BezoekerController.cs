using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Laak.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

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

    [Authorize]
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
        var medewerker = new Medewerker
        {
            Email = registreerModel.Email,
            UserName = registreerModel.Gebruikersnaam,
            PasswordHash = registreerModel.Wachtwoord,
            Functie = registreerModel.Functie,
        };
        // hier wordt doormiddel van de usermanager een nieuwe bezoeker gemaakt. We geven de bezoeker mee en moeten daarbij specifiek het wachtwoordt ook meegegeven 
        // het wachtwoord geven we mee om het te checken of het een sterk wachtwoord is. 
        var resultaat = await userManager.CreateAsync(medewerker, medewerker.PasswordHash);
        // het resultaat kan een error bevatten, info over het wachtwoord dat sterker moet of dat het goed is gegaan. En dat geven we terug.
        return resultaat.Succeeded ? Ok() : new BadRequestObjectResult(resultaat);
    }


    [HttpPost]
    [Route("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel gebruikerLogin)
    {
        var _user = await userManager.FindByEmailAsync(gebruikerLogin.Email);
        if (_user != null)
            if (await userManager.CheckPasswordAsync(_user, gebruikerLogin.Wachtwoord))
            {
                var secret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("awef98awef978haweof8g7aw789efhh789awef8h9awh89efh89awe98f89uawef9j8aw89hefawef"));

                var signingCredentials = new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
                var claims = new List<Claim> { new Claim(ClaimTypes.Name, _user.UserName) };
                var roles = await userManager.GetRolesAsync(_user);
                foreach (var role in roles)
                    claims.Add(new Claim(ClaimTypes.Role, role));
                var tokenOptions = new JwtSecurityToken
                (
                    issuer: "https://localhost:7047",
                    audience: "https://localhost:7047",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(10),
                    signingCredentials: signingCredentials
                );
                return Ok(new { Token = new JwtSecurityTokenHandler().WriteToken(tokenOptions) });
            }

        return Unauthorized();
    }
    // public async Task<IActionResult> login(LoginModel loginModel)
    // {
    //     var user = await userManager.FindByEmailAsync(loginModel.Email);
    //     if (user == null) return NotFound();
    //     if (await userManager.CheckPasswordAsync(user, loginModel.Wachtwoord))
    //     {
    //         await signInManager.SignInAsync(user, true);
    //         return Ok(user);
    //     }
    //     return Unauthorized();
    // }

    [Authorize]
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