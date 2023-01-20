using Microsoft.AspNetCore.Identity;

namespace Laak.Models;

public class Bezoeker : IdentityUser
{
    public string Voorkeuren { get; set; }
    public List<Donatie> Donaties { get; set; }

}