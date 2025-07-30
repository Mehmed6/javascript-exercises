document.querySelector("#btnSearch").addEventListener("click", () => {
    document.querySelector("#loading").style.display = "block"
    let text = document.querySelector("#textSearch").value
    document.querySelector("#details").style.opacity = "0"
    getCountry(text)
})

document.querySelector("#btnLocation").addEventListener("click", () => {
    document.querySelector("#loading").style.display = "block"
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(success, errorMessage)

})

const success = async position => {

    const lat = position.coords.latitude
    const lon = position.coords.longitude

    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
    const data = await response.json()
    document.querySelector("#textSearch").value = data.countryName
    document.querySelector("#btnSearch").click()

}
const getCountry = async country => {
    /* THIS IMPLEMENTATION USES ASYNC/AWAIT */
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
        if (!response.ok)
            throw new Error(`Could not find ${country}`)

        const data = await response.json()
        renderCountry(data[0])

        const countries = data[0].borders
        if (!countries)
            throw new Error("Border Countries not found!!")

        const neighborsResponse = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countries.toString()}`)
        const neighbors = await neighborsResponse.json()
        renderNeighbors(neighbors)

    }
    catch (err) {
        errorMessage(err)
    }

    /* THIS IMPLEMENTATION USES PROMISES WITHOUT ASYNC/AWAIT */
    /*
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
            if (!response.ok)
                throw Error("Country not found!!")
            return response.json()
        })
        .then(response => {
            renderCountry(response[0])
            const countries = response[0].borders
            if (!countries)
                throw Error("Border Countries not found!!")

            return fetch(`https://restcountries.com/v3.1/alpha?codes=${countries.toString()}`)
                .then(response => response.json())
                .then(response => renderNeighbors(response))
        })
        .catch(err => errorMessage(err))*/

    /* THIS IMPLEMENTATION DOES NOT USE PROMISES OR ASYNC/AWAIT SYNTAX */
    /*
    const request = new XMLHttpRequest()
    request.open("GET", "https://restcountries.com/v3.1/name/" + country)
    request.send()

    request.addEventListener("load", () => {
        const data = JSON.parse(request.responseText)
        renderCountry(data[0])

        const neighborCountries = data[0].borders.toString()

        const neighborRequest = new XMLHttpRequest()
        neighborRequest.open("GET", "https://restcountries.com/v3.1/alpha?codes=" + neighborCountries)
        neighborRequest.send()

        neighborRequest.addEventListener("load", () => {
            const data = JSON.parse(neighborRequest.responseText)
            renderNeighbors(data)
        })
    })*/
}
const renderCountry = country => {
    document.querySelector("#loading").style.display = "none"
    document.querySelector("#details").style.opacity = "1"
    document.querySelector("#neighbors").innerHTML = ""
    document.querySelector("#country-details").innerHTML = `
                        <div class="col-4">
                            <img src="${country.flags.png}" alt="" class="img-fluid">
                        </div>
                        <div class="col-8">
                            <h3 class="card-title">${country.name.common}</h3>
                            <hr>
                            <div class="row">
                                <div class="col-4">Population</div>
                                <div class="col-8">${country.population} Milyon</div>
                            </div>
                            <div class="row">
                                <div class="col-4">Language</div>
                                <div class="col-8">${Object.values(country.languages)}</div>
                            </div>
                            <div class="row">
                                <div class="col-4">Capital</div>
                                <div class="col-8">${country.capital[0]}</div>
                            </div>
                             <div class="row">
                                <div class="col-4">Money</div>
                                <div class="col-8">${Object.values(country.currencies)[0].name} ${Object.values(country.currencies)[0].symbol}</div>
                            </div>
                        </div>`
}
const renderNeighbors = countries => {
    let html = "";
    for (let country of countries) {
        html += `
            <div class="col-2 mt-2" >
                <div class="card">
                    <img src="${country.flags.png}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h6 class="card-title">${country.name.common}</h6>
                    </div>
            </div>
    </div>`
    }
    document.querySelector("#neighbors").innerHTML = html
}
const errorMessage = error => {
    document.querySelector("#loading").style.display = "none"
    let errorHtml = document.querySelector("#errors")
     errorHtml.innerHTML = `
            <div class="alert alert-danger">${error.message}</div>
        `
    setTimeout(() => errorHtml.innerHTML = "", 2000)
}
