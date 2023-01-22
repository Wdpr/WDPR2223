
using Microsoft.AspNetCore.Mvc;
using Laak.Context;
using Laak.Models;
using System.Globalization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

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
        foreach (var voorstelling in context.Voorstellingen)
        {
            if (!string.IsNullOrEmpty(voorstelling.Datum))
                voorstelling.DatumDateTime = DateTime.ParseExact(voorstelling.Datum, "dd-MM-yyyy", CultureInfo.InvariantCulture);
            if (!string.IsNullOrEmpty(voorstelling.Tijd))
                voorstelling.TijdDateTime = DateTime.ParseExact(voorstelling.Tijd, "HH:mm", CultureInfo.InvariantCulture);
        }
        return context.Voorstellingen.AsQueryable().Include(v => v.Zaal).Include(v => v.Artiest);
    }

    [HttpGet("{id}")]
    public Voorstelling GetVoorstelling(int id)
    {
        return context.Voorstellingen.AsQueryable().Include(v => v.Zaal).SingleOrDefault(v => v.Id == id);
    }

    [HttpPost]
    [Authorize]
    [Route("nieuweVoorstelling")]
    public Voorstelling PostVoorstelling(VoorstellingModel model)
    {
        Voorstelling voorstelling = new Voorstelling
        {

            Naam = model.naam,
            Img = model.img,
            Prijs = model.prijs,
            Genre = model.genre,
            ZaalId = context.Zalen.Where(zaal => zaal.Id == model.zaal).Select(z => z.Id).SingleOrDefault(),
            Datum = model.datum,
            Tijd = model.tijd,
            Speelduur = model.speelduur,
            Artiest = context.Artiesten.Where(artiest => artiest.Id == model.artiest).SingleOrDefault(),

        };

        Console.WriteLine("Voorstelling model");
        context.Voorstellingen.Add(voorstelling);
        context.SaveChanges();
        return voorstelling;

    }

    public class VoorstellingModel
    {

        public string? naam { get; set; }
        public string? img { get; set; }
        public string? datum { get; set; }
        public string? tijd { get; set; }
        public int prijs { get; set; }
        public int speelduur { get; set; }
        public string? genre { get; set; }
        public int zaal { get; set; }
        public int artiest { get; set; }

    }

}