const km = document.querySelector('#km');
const km1 = document.querySelector('#km1');
const preco2 = document.querySelector('#preco2');
const botao = document.querySelector('#botao');
const resultado = document.querySelector('#resultado');

botao.addEventListener('click', calculo)

function calculo() {
    let valor = Number(km.value)/Number(km1.value)
    let valorfinal = valor * Number(preco2.value)
    
    resultado.textContent = `O valor total da viagem será R$ ${valorfinal.toFixed(2)}`
}