Feature: bezoeker
    kan registreren
    en vervolgens inloggen

@tag5
Scenario: registratie
    Given ik ben op de registrerenpagina
    When ik vul mijn gebruikersnaam, email en wachtwoord in
    Then ik ben geregistreerd

@tag5
Scenario: login
    Given ik ben op de inlogpagina
    When ik vul mijn email en wachtwoord in
    Then ik ben ingelogd
