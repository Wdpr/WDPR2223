
using Microsoft.AspNetCore.Mvc;
using Laak.Context;
using Laak.Models;
using System.Globalization;
using Microsoft.AspNetCore.Authorization;

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

    // met Authorize wordt er gecontroleerd of de gebruiker ingelogd is. Als dat niet zo is krijgt de gebruiker een 401 error. 
    [Authorize]
    [HttpGet("{id}")]
    public Voorstelling GetVoorstelling(int id)
    {
        return context.Voorstellingen.SingleOrDefault(v => v.Id == id);
    }

    [HttpPost]
    [Route("niewuweVoorstelling")]
    public Voorstelling PostVoorstelling(VoorstellingModel model)
    { Voorstelling voorstelling = new Voorstelling{
        
        Naam = model.naam,
        Img = model.img,
        Prijs = model.prijs,
        Genre = model.genre,
        Zaal = context.Zalen.Where(zaal => zaal.Id == model.zaal).SingleOrDefault(),
        Datum = DateTime.Parse(model.datumTijd),
        Tijd =  DateTime.Parse(model.tijdsduur),
        Artiest = context.Artiesten.Where(artiest => artiest.Id == model.artiest).SingleOrDefault(),

        
    };
        Console.WriteLine("Voorstelling model");
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

public class VoorstellingModel{

    public string? naam{get;set;}
    public string? img { get; set; }
public string? datumTijd { get; set;}

public string? tijdsduur { get; set; }
    public int prijs { get; set; }

    public string? genre { get; set; }

    public int zaal { get; set; }

    public int artiest { get; set; }
}