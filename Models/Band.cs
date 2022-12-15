
namespace Laak.Models;

public class Band
{
    public int Id { get; set; }
    public string Naam { get; set; }
    public string Img { get; set; }
    public List<Artiest> Artiest { get; set; }
    public List<Voorstelling> Voorstellingen { get; set; }

}