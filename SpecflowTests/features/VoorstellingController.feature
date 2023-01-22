Feature: VoorstellingController
  Als een gebruiker
    wil ik een lijst van alle voorstellingen krijgen
    en wil ik een specifieke voorstelling kunnen opvragen

Scenario: All Voorstellingen opvragen
  Given Ik ben een gebruiker
  When Ik alle voorstellingen opvraag
  Then Alle Voorstellingen worden geretoured
  And De status code moet zijn 200


Scenario: View specific Voorstelling by ID
  Given Ik ben een gebruiker
  When Ik vraag om een specifieke voorstelling met een ID
  Then De specifieke voorstelling wordt geretoured
  And De status code moet zijn 200
