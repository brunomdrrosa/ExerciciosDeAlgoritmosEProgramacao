/*
5) Elabore um programa que leia um conjunto de 10 números 
naturais, 1 a 1, e diga quantos deles são PRIMOS.
*/

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

for(var i = 0; i < 10; i++){
    if(isPrime(i)) console.log(i);
}
   