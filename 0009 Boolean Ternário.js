/**
 * Sendo pouco usado, o Operador Ternário pode ser mais útil quando aprendermos o if e else
 * Entretanto, é uma ferramenta que pode facilmente causar problemas, deixar difícil de ler, não vale a pena usar
 * Então use com cautela, caso for usar, essa aula é mais para conhecimento mesmo ao invés de usar em um futuro
 * 
 * 
 * Faz comparativo em apenas uma única linha de código
 * Caso o valor seja true, retornará um valor, caso contrario, retornará o outro valor
 */

console.log(true ? 1 : 2); //Basicamente 'é true?' se sim, é 1, se não, é 2
console.log(false ? 'falso' : 'verdadeiro');// é true? se sim, é falso, se não, é verdadeiro

console.log(5 > 2 ? 'É sim' : 'É não') // caso 5 for maior que 2, retornará 'É sim', se for errado, retornará 'É não'
console.log(false ? 5 : 4); 
console.log('Thiago' == 'Thiago' ? 'Oh, Olá, Thiago' : 'Espere... um intruso?');
console.log('Thiago' == 'Allan' ? 'Oh, Olá, Thiago' : 'Espere... um intruso?');