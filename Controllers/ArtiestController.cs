using Microsoft.AspNetCore.Mvc;
using Laak.Context;
using Laak.Models;
using Microsoft.AspNetCore.Authorization;

namespace Laak.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class ArtiestController : ControllerBase
{
    private TheaterContext context;



    public ArtiestController(TheaterContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public IEnumerable<Artiest> getAlleArtiesten()
    {
        return context.Artiesten;
    }

    [HttpGet("{id}")]
    public Artiest GetArtiesten(int id)
    {
        return context.Artiesten.SingleOrDefault(v => v.Id == id);
    }

    [HttpPost]
    [Route("NieuweArtiest")]
    public Artiest PostArtiest(ArtiestModel model)
    {
        Artiest a = new Artiest
        {
            Naam = model.Naam,
            Img = model.Img,

        };
        Console.WriteLine("Artiest model");
        context.Add(a);
        context.SaveChanges();
        return a;

    }

    [HttpDelete]
    [Route("DeleteArtiest")]
    public void DeleteArtiest(int id)
    {
        foreach (Artiest artiesten in context.Artiesten)
        {
            if (id == artiesten.Id)
            {
                context.Remove(artiesten);
                context.SaveChanges();
            }
        }


    }
}



public class ArtiestModel
{

    public string Naam { get; set; }
    public string Img { get; set; }

}