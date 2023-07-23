/**
 *  Incrementando à variável, forma fácil
 *  Podemos incrementar a uma variável de uma forma mais fácil, invés de usar x = x + (número)
 *  E pra isso, podemos usar x += (número) ou até mesmo x++, porem, esse só subtrai ou soma 1.
 */

let numero = 5;

while(numero < 50 ) {
    console.log(numero);
    numero += 10;

}

for(let i = 0; i < 10; i++) {
    console.log(`o I é igual a ${i}`)
    
}

for(let a = 10; a > 0; a--) {
    console.log(`e agora, o A é igual a ${a}`);
}