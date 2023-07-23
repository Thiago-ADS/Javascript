let b1 = [2 , 4 ,5 ,7 ,8 ,2 ,3 ,1 ,9 ,19];
//console.log(Math.max(...b1));

let b2 = [ 100 , 200 , 300 , 100 , 203 , 101 ,92, 385 , 900 , 100 , 150, 901]
let jojo = [ 12,32,4334,3,545,4,4,65,7,67,6,4,3,43,3,232,3,13,31,323,4]
var maior = 0

function acharNumeros(array){
    
    for(let i = 0; i <= array.length;i++){
        if(array[i]<array[i+1] && maior < array[i+1]){
            maior = array[i+1]
        }
    }
    console.log(`O maior número é ${maior}`)
}

acharNumeros(b2)
acharNumeros(jojo)
