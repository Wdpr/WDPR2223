
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

## connectie met database
Voor het connecten van databases moet je de Connectie String aanpassen in "appsettings.json"
1. verander de Server naar
2. verander de Database naam naar de database die gespecifeerd voor die database/context gebruikt moet worden
Hier na moet je wel de volgende command in terminal uitvoeren: ```dotnet ef database update```
Controleer ook of de dotnet ef tool up to date is. Dat kan met ```dotnet tool update --global dotnet-ef```