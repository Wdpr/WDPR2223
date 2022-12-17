
using Microsoft.AspNetCore.Mvc;
using Laak.Context;
using Laak.Models;

namespace Laak.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VoorstellingController : ControllerBase
{
    private TheaterContext context;

    public VoorstellingController(TheaterContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public IEnumerable<Voorstelling> GetAlleVoorstelling()
    {
        return context.Voorstellingen;
    }

    [HttpGet("{id}")]
    public Voorstelling GetVoorstelling(int id)
    {
        return context.Voorstellingen.SingleOrDefault(v => v.Id == id);
    }

    [HttpPost]
    [Route("niewuweVoorstelling")]
    public Voorstelling PostVoorstelling(Voorstelling voorstelling)
    {
        Console.WriteLine("Voorstelling toegevoegd");
        context.Voorstellingen.Add(voorstelling);
        context.SaveChanges();
        return voorstelling;
    }
    /*  !!! ik weet niet hoe je met SqlServer een foreign key meegeeft in een post request
    {
    "Naam": "Lubach de Grote",
    "Img": "img",
    "Prijs": 5,
    "Genre": "Comedy"
    }
    */
}