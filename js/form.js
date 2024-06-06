const formulario =  document.getElementById('formulario');
const inputFormulario = document.getElementById('inputFormulario')

const formularioReal = data => {
    formulario.addEventListener('keyup', e => {
        e.preventDefault()
        const keyboard = inputFormulario.value.toLowerCase()
        //console.log(keyboard)

        const arrayFiltrado = data.filter(item => {
            const letraApi = item.name.toLowerCase()
            if( letraApi.indexOf(keyboard) !== -1 ){
                return item
            }
        })
        banderillas(arrayFiltrado)
    })
}