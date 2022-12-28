using Laak.Context;
using Laak.Models;
using Microsoft.AspNetCore.Mvc;

namespace Laak.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReserveringController : ControllerBase {

    private readonly TheaterContext context;

    public ReserveringController(TheaterContext context) {
        this.context = context;
    }

    [HttpGet]
    public IActionResult Get() {
        return Ok(context.Reserveringen);
    }

    [HttpGet("{id}")]
    public IActionResult Get(int id) {
        var reservering = context.Reserveringen.Find(id);
        if (reservering == null) {
            return NotFound();
        }
        return Ok(reservering);
    }

    [HttpPost]
    public IActionResult Post([FromBody] ReserveringModel reserveringModel) {
        List<Stoel> stoelen = new List<Stoel>();
        foreach (var (rij, nr) in reserveringModel.Stoelen) {
            var stoel = new Stoel { RijNr = rij, StoelNr = nr };
            stoelen.Add(stoel);
        }
        
        var reservering = new Reservering {
            Voorstelling = context.Voorstellingen.Find(reserveringModel.VoorstellingId),
            Bezoeker = context.Bezoekers.Find(reserveringModel.BezoekerUserName),
            TotaalPrijs = reserveringModel.TotaalPrijs,
            Stoelen = stoelen
        };
        context.Reserveringen.Add(reservering);
        context.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = reservering.Id }, reservering);
    }
}

public class ReserveringModel
{
    public int VoorstellingId { get; set; }
    public string BezoekerUserName { get; set; }
    public int TotaalPrijs { get; set; }
    public List<(int rij, int nr)> Stoelen { get; set; }
}