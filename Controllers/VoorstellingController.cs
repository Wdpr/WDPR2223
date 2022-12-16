
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
    /* 
    {
    "Id": 1,
    "Naam": "Lubach de Grote",
    "Img": "img",
    "Band": {
        "Id": 1,
        "Naam": "Arjen Lubach",
        "Img": "img"
    },
    "Zaal": {},         // btw, als je een object zoals Zaal, Artiest, Datum of Tijd leeg laat, moet je hem ook niet in de json zetten. Anders krijg je een error.
    "Datum": {},            // Door hem niet hier tussen te zetten wordt hij automatisch null.
    "Artiest": {},
    "Tijd": {},
    "Prijs": 5,
    "Genre": "Comedy"
    }
    */
}