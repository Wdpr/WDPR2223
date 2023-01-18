
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

## beginnen met testen
sws moet je de ```dotnet restore``` commando uitvoeren. Dan daarna met je in de terminal navigeren naar "/ClientApp/" om daar ```npm install``` te doen.
Dit doe je om de packages up te daten. zo weten we zeker dat de testen werken. <br />
Voor een specflow test:
1. Om een specflow test te maken voeg je een feature file toe in de "Feature" folder. 
2. vervolgens kan je een groot gedeelte laten genereren door in de terminal ```dotnet build``` te doen.
3. Hierna voeg je in de "Steps" folder een .cs file toe waar je de test in kan schrijven.
4. Een layout van die test kan gemaakt worden door goed de error te kopieren als je in de terminal ```dotnet test``` doet. 
Voor een cypress test:
1. navigeer naar "\ClientApp\cypress\e2e" en voeg een cy.ts file toe.
2. Daar schrijf je je test in.
3. om de test te runnen moet de terminal op de "/ClientApp/" staan. Daar voor je in ```npx cypress open```.
4. navigeer door de interface en run de file te zien op het scherm dat geopent is.

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
