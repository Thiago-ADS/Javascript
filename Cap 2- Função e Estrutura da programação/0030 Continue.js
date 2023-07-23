/**
 *  Continue
 *  Com isso, caso um requerimento for atingido, podemos continuar o loop até atingir outra condição
 *  Eu não entendi direito como funciona mas é algo assim
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

/**
 *  Na real, pelo jeito, pula uma parte da execução do loop
 *  Ali vai botar ''cotinuando'' ao invés de pegar os números pares, e por causa do continue, vai continuar fazendo isso
 *  
 */
