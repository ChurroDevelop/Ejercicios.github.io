/**
 * Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
por pantalla el número de veces que aparece la letra en la frase.
 */
let plabra = prompt("Ingrese la palabra").toLowerCase();
let letra = prompt("Ingrese la letra que quiere verificar cuantas veces esta en la frase").toLowerCase().charAt(0);
let x = [];

for (let i = 0; i < plabra.length; i++) {
    if (letra === plabra[i]) {
        x.push(letra);
    }
}

console.log(x)