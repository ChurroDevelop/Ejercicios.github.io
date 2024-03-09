/**
 *Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
la cuenta atrás desde ese número hasta cero separados por comas.
 */

let numero = parseInt(prompt("Ingrese el numero"));
let x = [];
for (let i = 0; i < numero; i++) {
  x.push(numero - i);
}
console.log(x);
