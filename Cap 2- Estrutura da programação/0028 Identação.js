/**
 *  Identação serve para organizar o código e deixar mais légivel
 *  Não há uma regra de certo, mas cada bloco alinhado é bom identar uma vez
 *  Para a execução do código, não muda nada, irá executar igualmente
 *  Mas será mais fácil entendermos o que está ocorrendo nos códigos
 *  Aqui será um exemplo de um código bem indentado
 */

let x = 0;
let y = 0;

if(x == 0 && y == 0) {
    let z = 5;
    if (z > 2) {
        console.log(`Z é igual a ${z}`);
        for (i = 0; i < 5; i = i + 1) {
            console.log(`i + 1 é igual a ${i}`);
            if (i == 4) {
                console.log(`agora i não somará mais.`);
            }
        }
    }
}