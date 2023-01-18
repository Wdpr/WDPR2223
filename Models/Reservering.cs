using System.ComponentModel.DataAnnotations.Schema;

namespace Laak.Models;
public class Reservering
{
    public int Id { get; set; }

    [ForeignKey("VoorstellingId")]
    public int VoorstellingId { get; set; }
    public Voorstelling Voorstelling { get; set; }

    [ForeignKey("BezoekerId")]
    public string BezoekerId { get; set; }
    public Bezoeker Bezoeker { get; set; }

    public List<Stoel> Stoelen { get; set; }
    public int TotaalPrijs { get; set; }
}