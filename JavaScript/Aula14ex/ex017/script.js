function multiplicar(){
    var num = document.getElementById("txtn")
    var tab = document.getElementById("seltab")
    var n = Number(num.value)
    if (num.value.length==0){
        window.alert("[ERRO] Campo em branco, digite um valor!")
    } else {
        tab.innerHTML = ""
        for(var c = 1; c<=10; c++){
            var t = n*c
            var item = document.createElement("option")
            item.text = ` ${n} x ${c} = ${t} `
            tab.value = `tab${c}`
            tab.appendChild(item)
        }
    }
} 
