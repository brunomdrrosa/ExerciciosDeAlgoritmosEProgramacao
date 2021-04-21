/*
3) Faça um programa que leia um valor N inteiro e calcule 
por meio de uma função o seu dobro, após isso, imprima o 
número e o seu dobro na tela.
*/

var n = 20

function multiplicar(n) {
    return function (dobro) {
        return n * dobro;
    };
};

console.log("O número escolhido foi:", n)
console.log("O dobro de", n, "é:", multiplicar(n)(2));