using Microsoft.EntityFrameworkCore;
using Laak.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace Laak.Context;

public class TheaterContext : IdentityDbContext
{

    // de options worden door "Program.cs" meegegeven en de "DbContext" weet verder wel wat er moet gebeuren
    public TheaterContext(DbContextOptions<TheaterContext> options) : base(options) { }

    public DbSet<Voorstelling> Voorstellingen { get; set; }

    public DbSet<Bezoeker> Bezoekers { get; set; }
    public DbSet<Medewerker> Medewerkers { get; set; }
    public DbSet<Reservering> Reserveringen { get; set; }
    public DbSet<Zaal> Zalen { get; set; }
    public DbSet<Voorkeur> Voorkeuren { get; set; }
    public DbSet<Donatie> Donaties { get; set; }
}

