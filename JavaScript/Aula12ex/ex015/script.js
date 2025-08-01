function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length==0 || Number(fano.value)>ano){
        window.alert("[ERRO] Verifique se os dados estão corretos e tente novamente!")
    } else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        if (fsex[0].checked){
            gênero = "homem"
            if (idade>=0 && idade<12){
                img.setAttribute("src","criança-m.png")
            } else if(idade<21){
                img.setAttribute("src","adolescente-m.png")
            } else if(idade<50){
                img.setAttribute("src","adulto-m.png")
            } else{
                img.setAttribute("src","idoso-m.png")
            }
        } else if (fsex[1].checked){
            gênero = "mulher"
            if (idade>=0 && idade<12){
                img.setAttribute("src","criança-f.png")
            } else if(idade<21){
                img.setAttribute("src","adolescente-f.png")
            } else if(idade<50){
                img.setAttribute("src","adulta-f.png")
            } else{
                img.setAttribute("src","idosa-f.png")
            }
        } else if (fsex[2].checked){
            gênero = "pessoa"
            if (idade>=0 && idade<12){
                img.setAttribute("src","criança-p.png")
            } else if(idade<21){
                img.setAttribute("src","adolescente-p.png")
            } else if(idade<50){
                img.setAttribute("src","adulta-p.png")
            } else{
                img.setAttribute("src","idosa-p.png")
            }
        }
        res.innerHTML= `Detectamos um(a) ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}