using Microsoft.AspNetCore.Mvc;
using Laak.Context;
using Laak.Models;
using Microsoft.AspNetCore.Authorization;

namespace Laak.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ArtiestController : ControllerBase
{
    private TheaterContext context;

    public ArtiestController(TheaterContext context)
    {
        this.context = context;
    }

    [Authorize]
    [HttpGet]
    [Route("alleArtiesten")]
    public IEnumerable<Artiest> getAlleArtiesten()
    {
        return context.Artiesten;
    }

    [Authorize]
    [HttpGet("{id}")]
    public Artiest GetArtiesten(int id)
    {
        return context.Artiesten.SingleOrDefault(v => v.Id == id);
    }

    [Authorize]
    [HttpPost]
    [Route("NieuweArtiest")]
    public Artiest PostArtiest(ArtiestModel model)
    {
        Artiest a = new Artiest
        {
            Naam = model.Naam,
            Img = model.Img,

        };
        context.Add(a);
        context.SaveChanges();
        return a;
    }
}

public class ArtiestModel
{
    public string Naam { get; set; }
    public string Img { get; set; }
}