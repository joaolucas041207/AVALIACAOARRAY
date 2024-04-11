let valor = [5, 235, 451, 2121, 34]
let maior = 0
let indiceMaior
for(let i=0; i < valor.length; i++){
    if(valor[i] > maior){
    maior = valor[i]
    indiceMaior = i
    }
}
alert(valor[indiceMaior])