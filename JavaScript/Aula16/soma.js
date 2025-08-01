function soma(n1,n2){
    return n1 + n2
}
console.log(soma(2,5))

//se eu esquecer de por um numero na soma eu posso escrever da seguinte maneira:

function soma (n1=0,n2=0){
    return n1 + n2
}
console.log(soma(2)) //dessa forma ele vai considerar o número esquecido como 0.