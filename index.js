function fetchDestaque() {
    return fetch(`https://api.rawg.io/api/games/3070?key=aa6e47b3923b472d8fc45288f9668f91&page_size=1`)
        .then(function (response) {
            return response.json();
        })
        .then(function (destaque) {
            console.log(destaque)
            return destaque

        })
}


function rDestaque(destaque){

    let containerDestaque = document.getElementById("destaques")
    let generalTemplate = ""
        const name = destaque.name
        const image = destaque.background_image
        const rating = destaque.metacritic
        const description = destaque.description
        const released = destaque.released  

        generalTemplate +=
            `<div class="video">
            <img class= vides src=${image}>
        </div>

        <div class="texto">
            <h2>${name}</h2>
            <p><b>Sobre:</b> ${description}</p>
            <p><b>Lançamento:</b> ${released}</p>
            <p><b>Avaliação:</b> ${rating}</p>
        </div>`
        containerDestaque.insertAdjacentHTML("beforeend", generalTemplate)

    }

function fetchPopulares() {
    return fetch(`https://api.rawg.io/api/games?key=aa6e47b3923b472d8fc45288f9668f91&page=1&page_size=8`)
        .then(function (response) {
            return response.json();
        })
        .then(function (populares) {
            return populares.results
        })
}

function rPopulares(populares) {
    let containerPopulares = document.getElementById("js-container-videos")
    let generalTemplate = ""
    for (let i = 0; i < populares.length; i++) {
        const name = populares[i].name
        const image = populares[i].background_image
        const id = populares[i].id
        const rating = populares[i].metacritic
        generalTemplate +=
            `<div class="jogo">
            <div class="tnota">
            <h3>${name}</h3>
            <h3>${rating}</h3>
            </div>
            <img class="img-game" src="${image}"></img>
            <button class="botão"><a href=detalhes.html?id=${id}>+ Mais Detalhes...</a></button>
            </div>`
    }
    containerPopulares.insertAdjacentHTML("beforeend", generalTemplate)
}

function fetchPlatformas() {
    return fetch(`https://api.rawg.io/api/platforms?key=aa6e47b3923b472d8fc45288f9668f91&page=1&page_size=3`)
        .then(function (response) {
            return response.json();
        })
        .then(function (plataforma) {
            return plataforma.results
        })
}

function rPlataforma(plataforma) {
    let containerPlataformas = document.getElementById("js-container-plat")
    let generalTemplate = ""
    for (let i = 0; i < plataforma.length; i++) {
        const name = plataforma[i].name
        const image = plataforma[i].image_background
        const id = plataforma[i].id
        const games = plataforma[i].games
        generalTemplate +=
            `<div class="box">
            <h3>${name}</h3>
            <img src="${image}">
            <div class="informações">
            <h4>Principais jogos</h4>
            <ul>
            <li>${games[0].name}</li>
            <li>${games[1].name}</li>
            <li>${games[2].name}</li>
            </ul>
            </div>
            </div>`
    }
    containerPlataformas.insertAdjacentHTML("beforeend", generalTemplate)
}



function fetchPublishers() {
    return fetch(`https://api.rawg.io/api/developers?key=aa6e47b3923b472d8fc45288f9668f91&page=1&page_size=3`)
        .then(function (response) {
            return response.json();
        })
        .then(function (publisher) {
            return publisher.results
        })
}

function rPublisher(publisher) {
    let containerPublishers = document.getElementById("js-container-pub")
    let generalTemplate = ""
    for (let i = 0; i < publisher.length; i++) {
        const name = publisher[i].name
        const image = publisher[i].image_background
        const id = publisher[i].id
        const games = publisher[i].games
        generalTemplate +=
            `<div class="box">
            <h3>${name}</h3>
            <img src="${image}">
            <div class="informações">
            <h4>Principais jogos</h4>
            <ul>
            <li>${games[0].name}</li>
            <li>${games[1].name}</li>
            <li>${games[2].name}</li>
            </ul>
            </div>
            </div>`
    }
    containerPublishers.insertAdjacentHTML("beforeend", generalTemplate)
}





function fetchDetalhesjogos(){
    const params = new URLSearchParams(window.location.search);
    let id = params.get("id")
    console.log(id)
    let URL = `https://api.rawg.io/api/games/${id}?key=aa6e47b3923b472d8fc45288f9668f91&page_size`
    console.log(URL)
        return fetch(URL)
            .then(function (response) {
                return response.json();
            })
            .then(function (details) {
                return details
            })
    
}

    function rDetalhesjogos(details){
        let containerDetails = document.getElementById("details")
        let generalTemplate = ""
            const name = details.name
            const image = details.background_image
            const rating = details.metacritic
            const description = details.description
            const released = details.released

            generalTemplate +=
                `<div class="video">
                <img class= vides src=${image}>
            </div>
    
            <div class="texto">
                <h2>${name}</h2>
                <p><b>Sobre:</b>${description}</p>
                <p><b>Lançamento:</b>${released} </p>
                <p><b>Avaliação:</b> ${rating}</p>
            </div>`
    
        containerDetails.insertAdjacentHTML("beforeend", generalTemplate)
    }

window.onload = function () {
    fetchPopulares().then(rPopulares)
    fetchPlatformas().then(rPlataforma)
    fetchPublishers().then(rPublisher)
    fetchDestaque().then(rDestaque)
    fetchDetalhesjogos().then(rDetalhesjogos)
}