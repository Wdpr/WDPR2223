using Microsoft.EntityFrameworkCore;
using Laak.Models;

namespace Laak.Context;

public class AccountContext : DbContext {
    public AccountContext(DbContextOptions<AccountContext> options) : base(options) { }

    public DbSet<Artiest> Artiesten { get; set; }
}
