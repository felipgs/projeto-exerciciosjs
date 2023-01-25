let btn = document.querySelector('button#botao')
let newUl = document.getElementById('lista')
let txt = document.getElementById('tarefa')

btn.addEventListener('click', () => {
    let newLi = document.createElement('li')
    newLi.innerHTML = `${txt.value}`
    newUl.appendChild(newLi)
    txt.value = ''
    txt.focus()
})