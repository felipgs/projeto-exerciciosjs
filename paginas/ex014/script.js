let res = document.querySelector('div#result')
let btn = document.querySelector('button#botao')

btn.addEventListener('click', () => {
    let now = new Date()
    let semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    let mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    res.innerHTML = `<p>O que eu recebi do sistema foi: Hoje é ${semana[now.getDay()]}, ${now.getDate()} de ${mes[now.getMonth()]} de ${now.getFullYear()}.</p>`
})