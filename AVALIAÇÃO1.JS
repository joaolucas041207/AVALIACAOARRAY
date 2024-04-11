//Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode
//montar seu sorvete com até 3 bolas (sabores).

//Criar um programa que simule esse sistema:
//1- Adicionar sabor
//2- Remover sabor
//3- Visualizar sorvete
//4- Finalizar pedido


let sabor = []
let opcao = -5

while (opcao != 0) {
    opcao = prompt(`======== SORVETES ========
    1- adicionar sabor
    2- remova sabor
    3- Visualizar sorvete
    4- Finalizar pedido
    `)
    switch(opcao){
        case '1':
            sabor.push(prompt("ADICINAR SABOR: "))
            break
            case '2':
            sabor.includes(alert("REMOVA SABOR: "))
            sabor.push(prompt("remover"))
            sabor.includes(alert("SABOR REMOVIDO."))
            break
            case '3':
            sabor.includes(alert("sabores adicionados são"))
            alert(sabor)
            break
            case '4':
                sabor.includes(alert("sabores finalizados são. "))
            alert(sabor)
            break
        case '5':
        sabor.pop()
            break
            case '6':
            if(sabor.includes(prompt("LIMITE DE SABOR ATINGIDO" + length.sabor + 'elimine 1sabor' ))){
                alert("3 SABORES JA FORAM INCLUIDOS, TIRE 1 SABOR!")
            }else{}
        case '6':
            if(sabor.includes(prompt("sabor existe?"))){
                alert("O sabor está na lista!")
            }else{
                alert("O sabor não está na lista!")
            }
            break
        case '7':
            alert(sabor.sort())
            break
        case 0:
            alert("Sair")
            break

    }
}