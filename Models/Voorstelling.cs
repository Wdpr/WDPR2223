
namespace Laak.Models;

public class Voorstelling
{
    public int Id { get; set; }
    public string Naam { get; set; }
    public string Img { get; set; }


    public Artiest? Artiest { get; set; }
    public Band? Band { get; set; }

    public Zaal? Zaal { get; set; }
    public DateTime? Datum { get; set; }
    public DateTime? Tijd { get; set; }
    public int? Prijs { get; set; }
    public string? Genre { get; set; }

}