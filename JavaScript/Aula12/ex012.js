var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${min} minutos.`)
if (hora >= 0 && hora <= 5) {
    console.log ("Boa madrugada!")
} else if (hora >= 6 && hora <= 11){
    console.log("Bom dia!")
} else if (hora >= 12 && hora <= 17){
    console.log("Boa tarde!")
} else if (hora >= 18 && hora <= 23){
    console.log("Boa noite!")
}