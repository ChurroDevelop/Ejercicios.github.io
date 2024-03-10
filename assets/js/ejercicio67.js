/**
 * Escribir un programa que pida al usuario un número entero y muestre por pantalla un
triángulo rectángulo como el de más abajo, de altura el número introducido
 */
let cantidad = parseInt(prompt("Ingrese la cantidad de numeros"));
let x = [];

for (let i = 0; i < cantidad; i++) {
    let numero = parseInt(prompt("Ingrese el numero"));
    if (numero % 2 !== 0) {
        x.push(numero);
    }
    console.log(x)
}