/** Estrutura de repetição: while
 *  Precisamos definir um fim para o loop, se não, o loop será infinito, ou seja, dar a sua condição
 *  Caso não tiver um fim e ocorrer o loop infinito, irá comer muita memória e o browser irá parar de responder
 */
;
let x = 10

while(x > 0) {
    console.log(x);
    x = x - 1;
} // X é igual a 10, então enquanto X for maior que zero, x vai receber x - 1, ou seja, vai subtraindo 1
// então no final, resultado foi 10, 9, 8, 7 ,6... 2, 1.

let y = 0;

while(y <= 10) {
    console.log('O valor de y agora é: ' + y);
    y = y + 1
}