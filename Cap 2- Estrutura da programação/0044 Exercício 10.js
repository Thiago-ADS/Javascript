// Tarefa: Verifique se o número é primo

let num = 8
let div = 0;
let i = 1

for(let i = 1; i <= num; i++) {
     //Aqui ele vai adicionando 1 até chegar no número proposto

    if(num % i == 0) {
        div++      
        //Aqui ele vai ver se o número é divisivel pelo número que está no i, se for, div receberá +1
    }
}

if (div == 2) {
    console.log(`${num} é primo`) 
}else {
    console.log(`${num} não é primo`)
}
/*
E caso, se div for exatamente igual a 2, é primo, caso contrario, seria acima de 2, pois primo só seria
dividido 2 vezes, por ele mesmo e por 1. se tivesse mais divisões, seria acima de 2 e não seria primo.
*/
