using Microsoft.AspNetCore.Mvc;
using Laak.Context;
using Laak.Models;
using Microsoft.AspNetCore.Authorization;

namespace Laak.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class DonatieController : ControllerBase
{
    private TheaterContext context;

    public DonatieController(TheaterContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public IEnumerable<Donatie> GetAlleDonaties()
    {
        return context.Donaties;
    }

    [Authorize]
    [HttpGet("{id}")]
    public Donatie GetDonatie(int id)
    {
        return context.Donaties.SingleOrDefault(d => d.Id == id);
    }

    [HttpPost]
    [Route("nieuweDonatie")]
    public Donatie PostDonatie(Donatie donatie)
    {
        Console.WriteLine("Donatie toegevoegd Controllerclass bericht");
        context.Donaties.Add(donatie);
        context.SaveChanges();
        return donatie;
    }
}