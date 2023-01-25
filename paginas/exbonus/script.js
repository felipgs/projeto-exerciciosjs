let btn = document.querySelector('button#botao')
let btn2 = document.querySelector('button#botao2')
let lista = document.getElementById('lista')

btn.addEventListener('click', () => {
    let txt = document.getElementById('tarefa')
    let newLi = document.createElement('li')
    newLi.innerHTML = `${txt.value}`
    lista.appendChild(newLi)
    txt.value = ''
    txt.focus()
})