let res = window.document.querySelector('div#res')

function clicou() {
    let nome = prompt("Qual é o seu nome?")
    res.innerText = `Olá <strong>${nome}</strong>, é um grande prazer te conhecer!`
}

