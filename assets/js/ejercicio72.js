/**
 * Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
una las letras de la palabra introducida empezando por la última.
 */
let palabra = prompt("Ingrese la palabra que vas a separar");
let x = [];

for (let i = 0; i < palabra.length; i++) {
    x.push(palabra[i]);
}
console.log(x)