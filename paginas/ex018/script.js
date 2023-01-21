let res = document.getElementById('result')
let btn = document.getElementById('botao')

btn.addEventListener('click', adivinhar)

function adivinhar(p1) {
    p1 = Number(window.prompt('Qual é o seu palpite?'))
    let pc = Math.floor(Math.random() * 20 + 1)
    if (pc > p1) {
        res.innerHTML += `<p>Você falou ${p1}. Meu número é <strong>MAIOR</strong></p>`
    } else if (pc == p1) {
        res.innerHTML += `<p>Você falou ${p1}. Parabéns você <strong>ACERTOU!</strong></p>`
    } else {
        res.innerHTML += `<p>Você falou ${p1}. Meu número é <strong>MENOR</strong></p>`
    }
}

