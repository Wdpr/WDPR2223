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
    public IActionResult Post([FromBody] Reservering reservering) {
        context.Reserveringen.Add(reservering);
        context.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = reservering.Id }, reservering);
    }
}