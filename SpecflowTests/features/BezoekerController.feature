Feature: BezoekerController
  Als een gebruiker
  wil ik mij kunnen registreren en inloggen

Scenario: Registreer als een Bezoeker
  Given Ik ben een nieuwe gebruiker
  When Ik mijn registratie informatie heb ingevuld als een Bezoeker
  Then mijn account is gemaakt en de status code is 201

Scenario: Registreer als een Medewerker
  Given Ik ben een nieuwe gebruiker
  When Ik mijn registratie informatie heb ingevuld als een Medewerker
  Then mijn account is gemaakt en de status code is 201
