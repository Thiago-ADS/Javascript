/**
 * Tarefa: Faça uma estrutura if/else para verificar se um usuário pode dirigir
 * Armazene em variáveis algumas informações sobre o usuário, idade, nome, se tem CNH
 * Exiba uma mensagem diferente pra cada situação a seguir:
 * Se a idade for maior que 18 e não possuir CNH
 * Se a idade for menor que 18 e não possuir CNH
 * Se a idade for maior que 18 e possuir CNH
 */

let CNH = true;
let idade = 21;

if (idade >= 18 && CNH == true) { 
    console.log('Pode dirigir')

} else if (idade >= 18 && CNH == false) {
    console.log('Tem idade porém não tem CNH')

} else {
    console.log('Não pode dirigir')
}

//Exercício falhado