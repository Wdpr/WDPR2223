
clone deze github repo.
het zou zo moeten werken. 
Je hoeft niet iets te doen van vorige repo
succ

git commands: 
```
git fetch - haalt laatste updates van GitHub
git log - laat zien wat de updates zijn.
git branch - laat zien welke branches lokaal gebruikt worden
git checkout [branchnaam] - verandert je lokale active branch naar gespecifeerde branchnaam
```

## Connectie met database
Hier volgen de stappen die je moet nemen om correct een connectie te maken met SQLServer:
1. Zorg eerst dat je ssms hebt geinstalleerd en dat je een normale database kunt maken en runnen. Controleer ook of de dotnet ef tool up to date is. Dat kan met ```dotnet tool update --global dotnet-ef```
2. Controleer of de file "appsettings.json" al bestaat. Zo ja, ga naar stap 4.
3. Zo niet, maak deze dan aan met de body hieronder gegeven.
```
{
  "Logging": {
      "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
      }
    },
"AllowedHosts": "*",
"ConnectionStrings": {
  "WDPRDatabase": "Server=ServerNaam;Database=DatabaseNaam;Trusted_Connection=True;MultipleActiveResultSets=true;Trust Server Certificate=true"
}
}
```
4. Maak in SSMS een database aan die je voor dit project wilt gebruiken. 
5. Bij de "ConnectionStrings" in de "appsettings.json" file verander de server en database naam. De "ServerNaam" is de naam waarmee je als het goed is 
mee inlogt als je SSMS opstart en klikt op "Connect". De "DatabaseNaam" is de naam die je je database voor dit project hebt genoemt.
6. Voor de volgende command uit in de terminal: ```dotnet ef database update```
7. Run het programma met F5 en controleer of het gelukt is door de api te gebruiken met "/api/voorstelling". Je krijgt dan een lege lijst terug.
