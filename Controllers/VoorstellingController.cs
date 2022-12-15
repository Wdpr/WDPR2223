
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
        return context.Voorstellingen.SingleOrDefault(v => v.id == id);
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
    "Artiest": {},
    "Bank": {},
    "Zaal": {},
    "Datum": {},
    "Tijd": {},
    "Prijs": 5,
    "Genre": "Comedy"
    }
    */
}