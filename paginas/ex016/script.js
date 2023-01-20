let res = document.querySelector('div#result')
let btn = document.querySelector('button#botao')

btn.addEventListener('click', ( )=> {
    let agora = new Date
    let ano = agora.getFullYear()
    let anoNascimento = Number(window.prompt('Em que ano você nasceu?'))
    let idade = ano - anoNascimento
    res.innerHTML = `<p>Quem nasceu em ${anoNascimento} vai completar <mark>${idade}</mark> anos em ${ano}.</p>`

})