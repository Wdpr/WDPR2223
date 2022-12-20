using Microsoft.EntityFrameworkCore;
using Laak.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Laak.Context;

public class TheaterContext : IdentityDbContext {
    
    // de options worden door "Program.cs" meegegeven en de "DbContext" weet verder wel wat er moet gebeuren
    public TheaterContext(DbContextOptions<TheaterContext> options) : base(options) { } 

    public DbSet<Voorstelling> Voorstellingen { get; set; }
    public DbSet<Bezoeker> Bezoekers { get; set; }
}
    
