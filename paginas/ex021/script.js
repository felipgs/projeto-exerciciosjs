let res = document.querySelector('div#result')
let btn = document.querySelector('button#botao')
btn.addEventListener('click', (mes) => {
    let estacao = ''
    mes = window.prompt('Digite o mês em extenso (ex: Janeiro)').toLowerCase()
    if (mes == 'dezembro' || mes == 'janeiro' || mes == 'fevereiro') {
        estacao = 'VERÃO'
    }   else if (mes == 'março' || mes =='abril' || mes == 'maio') {
        estacao = 'OUTONO'
    }   else if (mes == 'junho' || mes == 'julho' || mes == 'agosto') {
        estacao = 'INVERNO'
    }   else if (mes == 'setembro' || mes == 'outubro' || mes == 'novembro') {
        estacao = 'PRIMAVERA'
    }   else {
        estacao = 'INDEFINIDA'
    }
    res.innerHTML = `<p>No mês de ${mes.toUpperCase()} , estamos no(a) <strong>${estacao}</strong></p>`
})