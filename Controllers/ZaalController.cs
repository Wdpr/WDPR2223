
using Microsoft.AspNetCore.Mvc;
using Laak.Context;
using Laak.Models;
using Microsoft.EntityFrameworkCore;

namespace Laak.Controllers;

[ApiController]
[Route("api/[controller]")]

public class ZaalController : ControllerBase{
    
    private readonly TheaterContext _context;
    public ZaalController(TheaterContext context){
        _context = context;
    }

    [HttpGet]
    public async Task<IEnumerable<Zaal>> GetZalen(){
    
        return await _context.Zalen.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Zaal>> GetZaal(int id){
        var zaal = await _context.Zalen.FindAsync(id);

        if(zaal == null){
            return NotFound();
        }

        return zaal;
    }

    [HttpPost]
    public async Task<ActionResult<Zaal>> PostZaal(Zaal zaal){
        _context.Zalen.Add(zaal);
        await _context.SaveChangesAsync();
        return zaal;
    }



}