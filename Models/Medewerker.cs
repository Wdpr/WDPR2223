using Microsoft.AspNetCore.Identity;

namespace Laak.Models;

public class Medewerker : IdentityUser
{
    public int Id { get; set; }
    public string Functie { get; set; }
}