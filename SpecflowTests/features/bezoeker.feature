Feature: bezoeker
    kan registreren
    en vervolgens inloggen

@tag5
Scenario: registratie
    Given een bezoeker heeft geen account
    When de bezoeker de username peter invult
    And de bezoeker de email peter@mail.com invult
    And de bezoeker het wachtwoord WDpr123! invult
    And de bezoeker de login request verstuurd
    Then wordt er een account gemaakt

@tag5
Scenario: login
    Given een bezoeker heeft een account
    When de bezoeker zijn email peter@mail.com invult
    And de bezoeker zijn wachtwoord WDpr123! invult
    And de bezoeker de registreer request verstuurd
    Then de bezoeker is ingelogd
