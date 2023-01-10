window.alert("Seja bem vindo(a) ao meu site!")
let res = window.document.getElementById('res')

function calcular() {
    let num = prompt("Digite um número:")
    res.innerText = `O dobro de ${num} é ${num * 2}, e a metade é ${num / 2}!`
}