let res = window.document.getElementById('res')

function somar() {
    let n1 = window.prompt('Digite um número:')
    let n2 = window.prompt('Digite outro número: ')
    let soma = Number(n1) + Number(n2)
    res.innerHTML = `A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${soma}</strong>`
}