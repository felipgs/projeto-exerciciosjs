let button = document.getElementById('botao')
button.addEventListener('click', contar)

function contar() {
    let result = document.getElementById('result')
    let fim = document.getElementById('final')
    let x = Number(fim.value)
    result.innerHTML += `<h3>Contando de 0  até ${x}</h3> <br>`
    for(let i = 0; i <= x; i++) {
        result.innerHTML += `${i} &#x1F449`
    }
    result.innerHTML += '&#x1F3C1'
    fim.value = ''
    fim.focus()
}