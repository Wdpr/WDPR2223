namespace Laak.Models;
public class Reservering
{
    public int Id { get; set; }
    public Voorstelling Voorstelling { get; set; }
    public Bezoeker Bezoeker { get; set; }
    public List<Stoel> Stoelen { get; set; }
    public int TotaalPrijs { get; set; }
}