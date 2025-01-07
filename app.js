const fetchPays = async () => {
    try {
        const reponse = await fetch("https://restcountries.com/v3.1/region/europe")
        const pays = await reponse.json()
        console.log(pays)
        let paysList = document.querySelector("#pays-list")
        paysList.innerHTML = pays
            .map((nom) => `<div class="card ms-4 mb-4" style="width: 18rem;">
                                <img src="${nom.flags.svg}" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h2 id="nom-pays">${nom.name.common}</h2>
                                    <p id="capitale-pays"><span class="fw-bold">Capitale:</span> ${nom.capital}</p>
                                    <p id="population-pays"><span class="fw-bold">Population:</span> ${nom.area}</p>
                                </div>
                                </div>`)
            .join('')
    } catch (erreur) {
        console.error(erreur)
    }
}
fetchPays()

const paysList = document.querySelector("#pays-list")
const carte = document.querySelector('#detail-pays')
paysList.addEventListener("click", () => {
    paysList.innerHTML = paysList
        .map(pays => {
            return `<div class="card ms-4 mb-4" style="width: 18rem;">
                                <img src="${pays.flags.svg}" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h2 id="nom-pays">${pays.name.common}</h2>
                                    <p id="capitale-pays"><span class="fw-bold">Capitale:</span> ${pays.capital}</p>
                                    <p id="population-pays"><span class="fw-bold">Population:</span> ${pays.area}</p>
                                </div>
                                </div>`
        })

    })



