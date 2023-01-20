let res = document.querySelector('div#result')
let btn = document.querySelector('button#botao')

btn.addEventListener('click', () => {
    let data = new Date
    let mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let semana
    switch (data.getDay()) {
        case 0:
        semana = 'Domingo'
        break
        case 1:
        semana = 'Segunda-Feira'
        break
        case 2:
        semana = 'Terça-Feira'
        break
        case 3:
        semana = 'Quarta-Feira'
        break
        case 4:
        semana = 'Quinta-Feira'
        break
        case 5:
        semana = 'Sexta-Feira'
        break
        case 6:
        semana = 'Sábado'
        break
    }
    res.innerHTML = `<p>Dia: <mark>${data.getDate()}</mark></p><br>`
    res.innerHTML += `<p>Mês: <mark>${mes[data.getMonth()]}</mark></p><br>`
    res.innerHTML += `<p>Ano: <mark>${data.getFullYear()}</mark></p><br>`
    res.innerHTML += `<p>Dia da semana: <mark>${semana}</mark></p><br>`
    res.innerHTML += `<p>Hora: <mark>${data.getHours()}</mark></p><br>`
    res.innerHTML += `<p>Minutos: <mark>${data.getMinutes()}</mark></p><br>`
    res.innerHTML += `<p>Segundos: <mark>${data.getSeconds()}</mark></p><br>`
})