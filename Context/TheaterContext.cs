using Microsoft.EntityFrameworkCore;
using Laak.Models;

namespace Laak.Context;

public class TheaterContext : DbContext {
    
    // de options worden door "Program.cs" meegegeven en de "DbContext" weet verder wel wat er moet gebeuren
    public TheaterContext(DbContextOptions<TheaterContext> options) : base(options) { } 

    public DbSet<Voorstelling> Voorstellingen { get; set; }
}
    
