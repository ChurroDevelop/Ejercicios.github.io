/**
 * Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
número primo o no.
 */
function primo(numero){
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}

let numero = parseInt(prompt("Ingrese el numero para determinar si es primo o no"));
console.log(primo(numero));