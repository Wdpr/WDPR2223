using Microsoft.AspNetCore.Identity;

namespace Laak.Models;

public class Bezoeker : IdentityUser
{
    public int Id { get; set; }
    public string Intresse { get; set; }

}