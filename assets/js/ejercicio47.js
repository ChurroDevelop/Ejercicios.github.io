/**
 * Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
menor o si son iguales.
 */

let numUno = parseFloat(prompt("Ingrese el numero 1"));
let numDos = parseFloat(prompt("Ingrese el numero 2"));
let numTres = parseFloat(prompt("Ingrese el numero 3"));
let mayor, menor;


if (numUno > numDos && numUno > numTres) {
  alert(`El numero ${numUno} es mayor que ${numDos} y ${numTres}`);
  mayor = numUno;
}
else if (numDos > numTres && numDos > numUno) {
  alert(`El numero ${numDos} es mayor que ${numTres} y ${numTres}`);
  mayor = numDos;
}
else if (numTres > numUno && numTres > numDos) {
  alert(`El numero ${numTres} es mayor que ${numDos} y ${numUno}`);
  mayor = numTres
}
else if (numUno === numDos && numUno === numTres) {
  alert(`Los tres numeros son iguales`);
}


if (numUno < numDos && numUno < numTres) {
  alert(`El numero ${numUno} es el menor de todos`);
  menor = numUno;
}
else if (numDos < numTres && numDos < numUno) {
  alert(`El numero ${numDos} es el menor de todos`);
  menor = numDos;
}
else if (numTres < numUno && numTres < numDos) {
  alert(`El numero ${numTres} es el menot de todos`);
}

alert(`El numero mayor es: ${mayor} \n El numero menor es ${menor}`);