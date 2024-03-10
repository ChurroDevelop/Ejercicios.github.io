/**
 * Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10.
 */

let numero = parseInt(prompt("Ingrese el numero para imprimir la tabla de multiplicar"));

for (let i = 1; i <= 10; i++) {
    let mult = numero * i;
    console.log(`${i} * ${numero} = ${mult}`);
}