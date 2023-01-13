let btn = document.querySelector('button#botao')
let btn2 = document.querySelector('button#botao2')
let btn3 = document.querySelector('button#botao3')
let btn4 = document.querySelector('button#botao4')
let result = document.querySelector('div#result')

btn.addEventListener('click', () => {
    let newP = document.createElement('p')
    newP.innerHTML = `<p>Clicou no primeiro botão</p>`
    result.appendChild(newP)
})

btn2.addEventListener('click', () => {
    let newP = document.createElement('p')
    newP.innerHTML = `<p>Clicou no segundo botão</p>`
    result.appendChild(newP)
})

btn3.addEventListener('click', () => {
    let newP = document.createElement('p')
    newP.innerHTML = `<p>Clicou no terceiro botão</p>`
    result.appendChild(newP)
})
btn4.addEventListener('click', () => {
    let newP = document.createElement('p')
    newP.innerHTML = `<p>Clicou no quarto botão</p>`
    result.appendChild(newP)
})


