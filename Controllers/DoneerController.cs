using Laak.Context;
using Laak.Models;
using Microsoft.AspNetCore.Mvc;

namespace Laak.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DoneerController : ControllerBase
{
    private readonly TheaterContext context;

    public DoneerController(TheaterContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAlleDonaties()
    {
        var donaties = context.Donaties.ToArray();
        return Ok(donaties);
    }

    [HttpPost]
    public async Task<IActionResult> Post(Donatie donatie)
    {
        await context.Donaties.AddAsync(donatie);
        context.SaveChanges();
        return Ok(donatie);
    }
}