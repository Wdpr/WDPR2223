namespace Laak.Models;

public class Donatie
{
    public int Id { get; set; }
    public int Bedrag { get; set; }
    public DateTime Datum { get; set; }
    public string BezoekerId { get; set; }
}