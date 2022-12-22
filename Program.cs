using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Laak.Context;
using Laak.Models;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
// Add services to the container.
builder.Services.AddDbContext<TheaterContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("WDPRDatabase")));  // database voor accounts
// met de volgende stuk code heb ik alle Microsoft services zoals het inloggen en registreren toegevoegd.
builder.Services.AddIdentity<Bezoeker, IdentityRole>()
    .AddEntityFrameworkStores<TheaterContext>()
    .AddDefaultTokenProviders();
builder.Services.AddAuthentication();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:44468",
            "https://localhost:7177",
            "https://localhost:5027");
        });
});


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
app.UseCors(MyAllowSpecificOrigins);

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
