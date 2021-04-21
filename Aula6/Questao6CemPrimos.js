// 6) Faça um programa que escreva os 100 primeiros números PRIMOS.

function NumeroPrimo(num) {
    if (num < 2) { return false; }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) { return false; }
    }
    return true;
}

var arr = [];
var x = 0;
while (arr.length < 100) {
    if (NumeroPrimo(x)) { arr.push(x); }
    x++;
}

console.log(arr);