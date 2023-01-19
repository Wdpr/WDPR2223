
using System.ComponentModel.DataAnnotations.Schema;

namespace Laak.Models;

public class Voorstelling
{
    public int Id { get; set; }
    public string Naam { get; set; }
    public string Img { get; set; }
    [ForeignKey("ArtiestId")]
    public int ArtiestId { get; set; }
    public Artiest Artiest { get; set; }

    [ForeignKey("ZaalId")]
    public int ZaalId { get; set; }
    public Zaal Zaal { get; set; }
    public string Datum { get; set; }
    public string Tijd { get; set; }
    public int Speelduur { get; set; }
    public int? Prijs { get; set; }
    public string? Genre { get; set; }

[NotMapped]
    public DateTime? DatumDateTime { get; set; }
    [NotMapped]
    public DateTime? TijdDateTime { get; set; }
}