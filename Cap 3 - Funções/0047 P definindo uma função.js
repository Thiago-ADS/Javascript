// Prática

function imprimirNoConsole() {  //Função sem argumentos
    console.log('Olá, mundo');  
}

imprimirNoConsole(); 

function imprimirUmNumero(num) {  //Função com argumentos
    console.log(`O número é ${num}`);
} 

imprimirUmNumero(3);
imprimirUmNumero(8 + 9);
imprimirUmNumero(-4);
imprimirUmNumero(13 - 5);
imprimirUmNumero(3 * 5);
imprimirUmNumero(19 % 3);


const numeroAleatorio = function() { //Função anonima com variável dentro
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

//Desse jeito, Não precisa fazer vários console.logs, apenas chamar a função com o diferente valor
//Ou seja, com uma única função, dá pra obter vários valores 