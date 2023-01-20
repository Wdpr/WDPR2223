export default function GebruikerHook(gebruikerId) {
    const token = sessionStorage.getItem("token")
    console.log(token)
    let gebruiker = null;

    if (token == null) {
        console.log("Geen token gevonden")
        return null;
    }

    fetch("api/bezoeker/" + gebruikerId, {
        method: "GET",
        headers: { "Authorization": "Bearer " + token },
    }).then(response => response.json()).then(data => {
        if (data !== null) {
            return data
        }
    })

    console.log("blabal")
    return gebruiker;
}