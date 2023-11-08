/* Teoria
- Uma função tem uma estrutura mais complexa
- Devemos sempre declarar a função com function
- Function sempre tem que ter m nome
- Pode ter ()
- O corpo da função é definido entre {}
- Geralmente retorna um valor
- É possivel declarar funções em variáveis

Teoria das funções:
*/

function escreverNoConsole() {
    console.log('Escrevendo no console'); //Aqui, botamos o que a função vai fazer quando invocada basicamente
}

escreverNoConsole(); //Aqui, invocamos a função, caso não invocar, nada acontecerá no console

const textoNoConsole = function() {
    console.log('Texto no console');
}

textoNoConsole();

const textoPorParametro = function(texto) {
    console.log(texto);
}

textoPorParametro('Testando por parametro');

/*
Define a função com a palvra function, com o nome da função, e com o parantêses, o argumento
*/