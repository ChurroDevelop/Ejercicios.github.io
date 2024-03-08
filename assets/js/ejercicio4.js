/**
 * Escribir un programa que pida al usuario un numero entero y muestre por pantalla
si es par o impar.
 */
let numero = parseInt(prompt("Ingrese el numero para determinar si es par o no"));

if (numero % 2 === 0) {
    console.log(`El numero ${numero} es par`)
} else{
    console.log(`El numero ${numero} es impar`)
}