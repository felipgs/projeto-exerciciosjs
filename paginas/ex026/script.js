let btn = document.getElementById('botao')
let res = document.getElementById('result')
btn.addEventListener('click', contar)


function contar() {
    let a = document.getElementById('inicio')
    let z = document.getElementById('fim')
    let inicio = Number(a.value)
    let fim = Number(z.value)
    
    res.innerHTML += `<h3>Contande de ${inicio} até ${fim}</h3>`
    if (inicio < fim) {
        for (let i = inicio; i <= fim; i ++) {
            res.innerHTML += `${i} &#x1F449`
        }
    } else if (inicio > fim) {
        for (let i = inicio; i >= fim; i --) {
            res.innerHTML += `${i} &#x1F449`
        }
    } else {
        res.innerHTML += `Não é possível contar, pois os números são iguais `
    }
    result.innerHTML += '&#x1F3C1'
    a.value = ''
    z.value = ''
    a.focus()
}

