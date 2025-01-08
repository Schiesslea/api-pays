const fetchPays = async () => {
    try {
        const reponse = await fetch("https://restcountries.com/v3.1/region/europe")
        const pays = await reponse.json()
        console.log(pays)
        let paysList = document.querySelector("#pays-list")
        paysList.innerHTML = pays
            .map((nom, index) => `<div class="card ms-4 mb-4" style="width: 18rem;" data-index="${index}">
                                <img src="${nom.flags.svg}" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h2 id="nom-pays">${nom.name.common}</h2>
                                    <p id="capitale-pays"><span class="fw-bold">Capitale:</span> ${nom.capital}</p>
                                    <p id="population-pays"><span class="fw-bold">Population:</span> ${nom.population}</p>
                                </div>
                                </div>`)
            .join('')

        // Ajout de l'événement de clic pour chaque carte de pays
        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("click", (event) => {
                const index = event.currentTarget.getAttribute("data-index")
                afficherDetailsPays(pays[index])
            })
        })
    } catch (erreur) {
        console.error(erreur)
    }
}

const afficherDetailsPays = (pays) => {
    const carte = document.querySelector("#carte")
    const cartePays = document.querySelector("#carte-pays")
    const drapeau = document.querySelector("#drapeau")
    const capi = document.querySelector("#capi")

    cartePays.innerText = pays.name.common
    drapeau.src = pays.flags.svg
    capi.innerHTML = `<span class="fw-bold">Capitale:</span> ${pays.capital}<br>
                      <span class="fw-bold">Langues:</span> ${pays.languages}<br>
                      <span class="fw-bold">Population:</span> ${pays.population}<br>
                      <span class="fw-bold">Monnaies:</span> ${pays.currencies}<br>
                      <span class="fw-bold">Région:</span> ${pays.region}<br>
                      <span class="fw-bold">Superficie:</span> ${pays.area} km²
                      <span class="fw-bold">Sous région:</span> ${pays.subregion}
                      <span class="fw-bold">Code pays:</span> ${pays.cca2}`

    carte.style.display = "block"
}

fetchPays()