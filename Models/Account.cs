using Microsoft.AspNetCore.Identity;

namespace Laak.Models;

public class Account : IdentityUser
{
    public int Id { get; set; }
    public string Naam { get; set; }

}