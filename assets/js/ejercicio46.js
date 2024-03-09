/**
 * Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.
 */

let numUno = parseFloat(prompt("Ingrese el numero 1"));
let numDos = parseFloat(prompt("Ingrese el numero 2"));
let numTres = parseFloat(prompt("Ingrese el numero tres"));

if (numUno > numDos && numUno > numTres) {
    alert(`El numero ${numUno} es mayor que ${numDos} y ${numTres}`);
}
else if (numDos > numUno && numDos > numTres) {
    alert(`El numero ${numDos} es mayor que ${numUno} y  ${numTres}`);
}
else if (numTres > numUno && numTres > numDos) {
    alert(`El numero ${numTres} es mayor que ${numUno} y ${numDos}`);
}
else if (numUno === numDos && numUno == numTres) {
    alert("Los numeros son iguales")
}