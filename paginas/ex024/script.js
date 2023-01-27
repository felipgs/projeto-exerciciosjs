let button = document.getElementById('botao')
let result = document.getElementById('result')
button.addEventListener('click', contar)

function contar() {
    result.innerHTML += `<h3>Contagem regressiva de 10 até 1</h3> <br>`
    for(let i = 10; i >= 1; i--) {
        result.innerHTML += `${i} &#x1F449`
    }
    result.innerHTML += '&#x1F3C1'
}