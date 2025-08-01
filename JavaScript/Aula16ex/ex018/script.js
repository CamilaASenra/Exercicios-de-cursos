let num = document.getElementById("txtn")
let lista = document.getElementById("val")
let res = document.getElementById("res")
let valores = []

function isNumero(n){
    if (Number(n)>=1 && Number(n)<=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n))!=-1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert ("Valor inválido ou que já se encontra na lista! Digite outro valor.")
    }
    num.value = ""
    num.focus()
} 

function somar(n1=0){
    for (let pos=0; pos<valores.length; pos++){
        n1 = n1 + valores[pos]
    }
    return n1
}

function maior (n2=0){
    for (let pos=0; pos<valores.length; pos++){
        if (valores[pos]>n2){
            n2 = valores[pos]
        }
    }
    return n2
}

function menor(n3=101){
    for (let pos=0; pos<valores.length; pos++){
        if (valores[pos]<n3){
            n3 = valores[pos]
        }
    }
    return n3
}

function finalizar(){
    if (valores.length == 0){
        window.alert("Não há valores cadastrados. Adicione os números antes de seguir!")
    } else {
        let ntermos = valores.length
        let soma = somar()
        let mais = maior()
        let menos = menor()
        let media = soma / ntermos
        res.innerHTML = ""
        res.innerHTML = `Ao todo, temos ${ntermos} números cadastrados. <br>`
        res.innerHTML += `O maior valor informado foi ${mais}.<br>`
        res.innerHTML += `O menor valor informado foi ${menos}.<br>`
        res.innerHTML += `Somando todos os valores temos ${soma}.<br>`
        res.innerHTML += `A media dos valores digitados é ${media}.<br>`
        res.innerHTML += "<br>"
    }
} 
    

