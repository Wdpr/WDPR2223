namespace Laak.Models;

public class Donatie {
    public int Id { get; set; }
    public int Bedrag { get; set; }
    public string Tekst { get; set; }
    public string GebruikerId { get; set; }
}