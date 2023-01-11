using Microsoft.AspNetCore.Mvc;
using Laak.Context;
using Laak.Models;

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

[HttpGet]
[Route("alleArtiesten")]
public IEnumerable<Artiest> getAlleArtiesten(){
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
    { Artiest a = new Artiest{
        Naam = model.Naam,
        Img = model.Img,
       
    };
        Console.WriteLine("Artiest model");
        context.Add(a);
        context.SaveChanges();
        return a;
   
    }
}

public class ArtiestModel{

    public string Naam { get; set; }
    public string Img { get; set; }

}