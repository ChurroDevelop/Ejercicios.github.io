/**
 * Escribir un programa que pida al usuario un número entero y muestre por consola un
triángulo rectángulo como el de más abajo.
 */
let altura = parseInt(prompt("Ingrese la altura que quiere que tenga el triangulo"));
let x = []
for (let i = 0; i < altura; i++) {
    x.push('*');
    console.log(x)
}