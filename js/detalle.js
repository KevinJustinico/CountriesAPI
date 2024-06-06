const banderas = document.getElementById('banderas')
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('data.json')
        const data = await res.json()

        const filtroData = data.filter(item => item.name === params)

        banderillas(filtroData)
    } catch (error) {
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ''

    data.forEach(itemPais => {
        // Obtener los nombres de los idiomas
        const languages = itemPais.languages.map(lang => lang.name).join(', ');

        elementos += `
        <article class="card-detalle">
        <img src="${itemPais.flag}" alt="" class="img-fluid" />
        <div class="card-content">

          <h1>${itemPais.name}</h1>
            <p>
            <b>Native Name: </b>
            ${itemPais.nativeName}
          </p>
          <p>
            <b>Population: </b>
            ${itemPais.population}
          </p>
          <p>
            <b>Region: </b>
            ${itemPais.region}
          </p>
          <p>
            <b>Sub Region: </b>
            ${itemPais.subregion}
          </p>
          <p>
            <b>Capital: </b>
            ${itemPais.capital}
          </p>
          <p>
            <b>Top Level Domain: </b>
            ${itemPais.topLevelDomain}
          </p>
          <p>
            <b>Currencies: </b>
            ${itemPais.currencies.map(currency => currency.name).join(', ')}
          </p>
          <p>
            <b>Languages: </b>
            ${languages}
          </p>
        
          <h2>Border Contries: </h2>
          <p></p>
        </div>
      </article>
        `
    });

    banderas.innerHTML = elementos
}
