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

    [HttpGet("{id}")]
    public Donatie GetDonatie(int id)
    {
        return context.Donaties.SingleOrDefault(d => d.Id == id);
    }

    [HttpPost]
    [Route("nieuweDonatie")]
    public Donatie PostNewDonatie(PostDonatie postDonatie)
    {
        var donatie = new Donatie
        {
            Bedrag = postDonatie.Bedrag,
            Datum = postDonatie.Datum,
            BezoekerId = postDonatie.BezoekerId
        };
        context.Add(donatie);
        context.SaveChanges();
        return donatie;
    }

    public class PostDonatie {
        public int Bedrag { get; set; }
        public DateTime Datum { get; set; }
        public string BezoekerId { get; set; }
    }
}