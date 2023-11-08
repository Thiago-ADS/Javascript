const soma = function(a, b, c) {
    return a + b + c;
}

console.log(soma(3, 5, 9));

const saudação = function(nome) {
    if(nome == 'Thiago') {  
        return 'Olá Thiago' 
    }
} //Faz uma saudação que verifica o nome, se for Thiago, retorna uma string e imprimo o resultado no console

console.log(saudação('Thiago'))

function multiplicar(x,y,z) {
    return x * y * z;
}

console.log(multiplicar(2, 3, 4));

const mult = multiplicar(5, 8, 4);

console.log(`O valor de mult é ${mult}`);

function podeDirigr(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log('Pode dirigir');
    } else {
        console.log('Não pode dirigir');
    }
}

console.log(podeDirigr (19, true));
console.log(podeDirigr (25, false));
console.log(podeDirigr (16, true));
console.log(podeDirigr (20, 1));