

namespace Laak.Models;

public class Band {
    public int id { get; set; }
    public string Naam { get; set; }
    public string img {get; set; }
    public List<Artiest> Artiest { get; set; }
    public List<Voorstelling> Voorstellingen { get; set; }
}