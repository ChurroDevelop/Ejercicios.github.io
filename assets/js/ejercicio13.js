/**
 * Escribir un programa que lea 4 números y calcule la media.
 */
function media(){
    let numUno = parseFloat(prompt("Ingrese el numero 1"));
    let numDos = parseFloat(prompt("Ingrese el numero 2"));
    let numTres = parseFloat(prompt("Ingrese el numero 3"));
    let numCuatro = parseFloat(prompt("Ingrese el numero 4"));
    return ((numUno + numDos + numTres + numCuatro) / 4);
}

alert(`la media de los cuatro numeros ingresados es: ${media()}`);