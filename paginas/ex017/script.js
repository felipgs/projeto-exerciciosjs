let res = document.querySelector('div#result')
let btn = document.querySelector('button#botao')
let btn2 = document.querySelector('button#botao2')

btn.addEventListener('click', () => {
    let aleatorio = Math.floor(Math.random() * 100 + 1)
    res.innerHTML += `<p>Acabei de pensar no número <mark>${aleatorio}!</mark></p>`
})

btn2.addEventListener('click', () => res.innerHTML = '<p>Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.</p>')
