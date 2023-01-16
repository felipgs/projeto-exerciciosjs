let res = document.querySelector('div#result')
let btn = document.querySelector('button#botao')

btn.addEventListener('click', (x,y) => {
    x = Number(window.prompt('Digite um número:'))
    y = Number(window.prompt('Digite outro número:'))
    let maior = 0
    if (x > y) {
        maior = x
    } else {
        maior = y
    }
    res.innerHTML = `<p>Analisando os valores <mark>${x}</mark> e <mark>${y}</mark>, o maior valor é <strong>${maior}</strong></p>`
})