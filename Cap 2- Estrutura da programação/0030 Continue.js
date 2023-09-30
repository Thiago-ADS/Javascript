/**
 *  Continue
 *  Com isso, caso um requerimento for atingido, podemos continuar o loop para ver se o PRÓXIMO loop vai atingir também a sua condição
 *  Então basicamente, atinge a condição, dá o que quer, vai pro próximo ciclo, vê se atinge, se sim, dá o que quer, se não, não acontece nada.
 */

let x = 0

while(x < 11) {
    x = x + 1;

    if(x % 2 == 0) {
        continue;
    }

    console.log(x);

}


for(let i = 10; i > 0; i = i - 1) {

    if(i % 2 == 0) { //Aqui basicamente pegará os números ímpares
        console.log('Continuando...');
        continue;
         //com esse continue, mesmo pegando o primeiro número ímpar, continuará pegando os ímpares até o menor que 0
    }
    
    console.log(i);

}

