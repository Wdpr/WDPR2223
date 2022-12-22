using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Laak.Context;
using Laak.Models;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddDbContext<TheaterContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("WDPRDatabase")));  // database voor accounts
// met de volgende stuk code heb ik alle Microsoft services zoals het inloggen en registreren toegevoegd.
builder.Services.AddIdentity<Bezoeker, IdentityRole>(
    options =>
    {
        options.Password.RequireDigit = false;
        options.Password.RequiredLength = 6;
        options.Password.RequireLowercase = false;
        options.Password.RequireUppercase = false;
        options.Password.RequireNonAlphanumeric = false;
        options.User.RequireUniqueEmail = true;
    }
)
    .AddEntityFrameworkStores<TheaterContext>()
    .AddDefaultTokenProviders();
builder.Services.AddAuthentication();

builder.Services.AddControllersWithViews();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
