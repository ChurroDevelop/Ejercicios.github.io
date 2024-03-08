/**
 * escribir un programa que almacene la cadena de caracteres contraseña de una
variable, pregunte al usuario por la contraseña e imprima por pantalla si la
contraseña introducida por el usuario coincide con la guardada en la variable sin
tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda
ingresar valores alfanuméricos.
 */

let contraseña = "holamundo";
contraseña.toLowerCase;
let validacion = prompt("Ingrese la contraseña, debe que coincidir");
validacion.toLowerCase;

const regex = /^[a-zA-z0-9]*$/;
console.log(regex.test(contraseña));

if (regex.test(validacion)) {
    if (validacion === contraseña) {
        console.log("La contraseña coincide");
    }
    else{
        console.log("La contraseña no coincide");
    }
} 
else{
    console.log("La contraseña no puede contener caracteres especiales");
}