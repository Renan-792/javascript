/*
let num = [6, 9, 4]
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
console.log(`O vaor 4 está na posição ${pos}`)
*/
var frutas = ['Maçã', 'Banana'];
// Banana
frutas.sort()
frutas.push('Laranja', 'Manga') //Adiciona
// frutas.pop() // Remove o Elemento que foi criado com push
// frutas.shift()
frutas.unshift('Morango') //adiciona ao inicio
var pos = frutas.indexOf('Banana')
console.log(frutas.length);
// 2

frutas.forEach(function(item, indice, array) {
    console.log(item);
});