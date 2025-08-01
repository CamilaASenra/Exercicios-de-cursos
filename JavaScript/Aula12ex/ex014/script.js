function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora <= 5) {
        img.src = "Madrugada.png"
        document.body.style.background = "#252f39"
    } else if (hora >= 6 && hora <= 11){
        img.src = "Manhã.png"
        document.body.style.background = "#d6bd9f"
    } else if (hora >= 12 && hora <= 17){
        img.src = "Tarde.png"
        document.body.style.background = "#fbb639"
    } else if (hora >= 18 && hora <= 23){
        img.src = "Noite.png"
        document.body.style.background ="#2f323b"
    }
}