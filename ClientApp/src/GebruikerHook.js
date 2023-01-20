export default function GebruikerHook(gebruikerId) {
    console.log(gebruikerId)
    fetch("api/bezoeker/" + gebruikerId, {
        method: "GET",
        headers: { "Authentication": "application/json" },
    }).then(response => response.ok? response.json() : null).then(data => {
        if (data !== null) {
            return data
        } 
    })   
}