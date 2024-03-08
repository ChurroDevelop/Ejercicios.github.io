/**
 * Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es
mayor o menor de edad, el programa debe validar que solo se puedan ingresar
números positivos.
 */

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");

if (edad < 0){
    console.log(`No puede registrar numeros negativos ${edad}`)
} 
else if (edad >= 0 && edad < 18){
    console.log(`Eres menor de edad ${edad}`)
}
else{
    console.log(`Eres mayor de edad`)
}