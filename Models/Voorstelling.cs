
namespace Laak.Models;

public class Voorstelling
{
    public int Id { get; set; }
    public string Naam { get; set; }
    public string Img { get; set; }
    public Artiest? Artiest { get; set; }
    public Zaal? Zaal { get; set; }
    public string? Datum { get; set; }
    public string? Tijd { get; set; }
    public int? Prijs { get; set; }
    public string? Genre { get; set; }

}