var idade = 66
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log("Você ainda não pode votar.")
} else if (idade < 18 || idade > 65){
    console.log("Você tem idade para votar, porém é voto opcional.")
} else {
    console.log("Você tem idade para votar e é voto obrigatório.")
}