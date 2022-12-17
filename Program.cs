using Microsoft.EntityFrameworkCore;
using Laak.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
// builder.Services.AddDbContext<TheaterContext>(options => options.UseSqlite("Data Source=TheaterDatabase.db"));
builder.Services.AddDbContext<AccountContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("AccountDatabase")));  // database voor accounts

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


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");;

app.Run();
