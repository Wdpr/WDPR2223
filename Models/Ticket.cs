
namespace Laak.Models;

public class Ticket
{
    public int Id { get; set; }
    public Voorstelling Voorstelling { get; set; }
    public Zaal Zaal { get; set; }
    public Stoel Stoel { get; set; }

}
