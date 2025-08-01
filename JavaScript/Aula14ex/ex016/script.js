
function contar(){
    var i = window.document.querySelector("input#txti")
    var f = window.document.querySelector("input#txtf")
    var p = window.document.querySelector("input#txtp")
    var res = window.document.querySelector("div#res")
    var ini = Number(i.value)
    var fin = Number(f.value)
    var pas = Number(p.value)
    if (i.value.length==0 || f.value.length==0 || p.value.length==0 || p.value==0 || p.value<0){
        window.alert("Não foi possível contar, verifique os dados e tente novamente!")
    } else if(ini<fin){
        res.innerHTML = "Começando: <br>"
        while (ini<=fin){
            res.innerHTML += ` ${ini} \u{1F449}` 
            ini = ini + pas
        }
    } else if(ini>fin){
        res.innerHTML = "Começando: <br>"
        while (ini>=fin){
            res.innerHTML += ` ${ini} \u{1F449}`
            ini = ini - pas
        }
    }
    res.innerHTML += `\u{1F3C1}`
}