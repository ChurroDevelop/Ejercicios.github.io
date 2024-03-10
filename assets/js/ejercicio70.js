/**
 * Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.
 */
let contraseña = prompt("Ingrese la contraseña a adivinar");

for (let i = 0; true; i++) {
    let usuario = prompt("Ingrese la contraseña para validarla");
    if (usuario === contraseña) {
        alert(`Has adivinado la contrasñea`);
        break
    }
    else{
        alert("Contraseña incorrecta")
    }
}