using Microsoft.EntityFrameworkCore;
using Laak.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace Laak.Context;

public class TheaterContext : IdentityDbContext<IdentityUser> {
    
    // de options worden door "Program.cs" meegegeven en de "DbContext" weet verder wel wat er moet gebeuren
    public TheaterContext(DbContextOptions<TheaterContext> options) : base(options) { } 

    public DbSet<Voorstelling> Voorstellingen { get; set; }
    public DbSet<Bezoeker> Bezoekers { get; set; }
}
    
