let button = document.getElementById('botao')
let result = document.getElementById('result')
button.addEventListener('click', contar)

function contar() {
    result.innerHTML += '<h3>Contando de 1 até 10</h3> <br>'
    
    for(let i = 1; i <= 10; i++) {
        result.innerHTML += `${i}  &#x1F449`
    }

    result.innerHTML += '&#x1F3C1'
}