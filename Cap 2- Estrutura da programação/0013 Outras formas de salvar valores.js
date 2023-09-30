/**
 *  Maneiras de salvar  valores
 *  Além de let, podemos usar var e const
 */
var nome = 'Thiago'; //Aqui sairia normal, mas por motivos avançados, usar let é melhor, var é antigo.
const ip = '127.0.0.1'; //Aqui, o valor nunca será alterado, é útil para configurações, ips, portas, etc.
console.log(nome);
console.log(ip);

nome = 'Arcanjo'// Aqui, o nome mudaria normalmente pois está em var.
ip = '320332'; // Aqui, o valor está em const, então dá erro pois está mudando o valor, mas const não pode mudar.

console.log(nome); //Mudaria para Arcanjo
console.log(ip); //Continuaria 127.0.0.01