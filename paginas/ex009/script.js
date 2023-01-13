let res = document.querySelector('div#res')
let btn = document.querySelector('button#botao')
let btn2 = document.querySelector('button#botao2')
let n = 0 

btn.addEventListener('click', clique)
btn2.addEventListener('click', reset)

function clique() {
    n += 1
    res.innerHTML = `<p>O contador está com <mark>${n}</mark> cliques.</p>`
}

function reset() {
    n = 0
    res.innerHTML = `<p>O contador está com <mark>${n}</mark> cliques.</p>`
}