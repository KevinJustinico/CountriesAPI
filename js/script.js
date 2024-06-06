const banderas = document.getElementById('banderas')

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
});

const fetchData = async () => {
    try {
        const res = await fetch('data.json')
        const data = await res.json()
        banderillas(data)
        formularioReal(data)
        filtros(data)
    } catch (error) {
        console.log(eror)
    }
}

const banderillas = data => {
    let elementos = ''

    data.forEach(itemPais => {
        elementos+= `
        <article class="card">
        <img src="${itemPais.flag}" alt="" class="img-fluid" />
        <div class="card-content">
          <h3>${itemPais.name}</h3>
          <p>
            <b>Population: </b>
            ${itemPais.population}
          </p>
          <p>
            <b>Capital: </b>
            ${itemPais.capital}
          </p>
          <p>
            <b>Region: </b>
            ${itemPais.region}
          </p>
          <a href="pais.html?name=${itemPais.name}">See more...</a>
        </div>
      </article>
        `
    });

    banderas.innerHTML = elementos
}