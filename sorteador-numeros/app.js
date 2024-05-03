function mudarTexto(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function sortear() {
    let numeroMaximo = parseInt(document.querySelector('#ate').value)
    let numeroMinimo = parseInt(document.querySelector('#de').value)

    if (numeroMinimo > numeroMaximo) {
        mudarTexto('#numeros__sorteados', 'O número mínimo é maior que o número máximo.')
    } else {
    let numeroConsole = parseInt(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo + 1)
    
    console.log (`${numeroConsole}`)

    mudarTexto('#numeros__sorteados', `Número sorteado: ${numeroConsole}`)
    }
}

