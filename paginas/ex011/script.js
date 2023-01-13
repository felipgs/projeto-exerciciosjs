let res = document.querySelector('div#result')
let btn = document.querySelector('button#botao')

btn.addEventListener('click', () => {
    let aluno = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${aluno}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${aluno}?`))
    let media = (n1 + n2) / 2
    res.innerHTML = `<p>Calculando a média final de <mark>${aluno}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark></p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark></p>`
    if (media >= 6 ) {
        res.innerHTML += `<p>A mensagem que temos é: <strong><span>Meus parabéns!</span></strong></p>`
    } else {
        res.innerHTML += `<p>A mensagem que temos é: <span>Estude um pouco mais!</span></p>`
    }
})