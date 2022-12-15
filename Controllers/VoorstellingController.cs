
using Microsoft.AspNetCore.Mvc;
using Laak.Context;
using Laak.Models;

namespace Laak.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VoorstellingController : ControllerBase {
    private TheaterContext context; 

    public VoorstellingController(TheaterContext context) {
        this.context = context;
    }

    [HttpGet]
    public IEnumerable<Voorstelling> GetAlleVoorstelling() {
        return context.Voorstellingen;
    }
}