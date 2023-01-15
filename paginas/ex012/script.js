let result = document.querySelector('div#result')
let btn = document.querySelector('button#botao')

btn.addEventListener('click', (x) => {
    let msg = ''
    x = Number(prompt('Digite um número:'))
    if (x % 2 == 0) {
        msg = 'PAR!'
    } else {
        msg = 'IMPAR!'
    }
    result.innerHTML = `O número <mark>${x}</mark> que foi digitado é <strong>${msg}</strong>`
})