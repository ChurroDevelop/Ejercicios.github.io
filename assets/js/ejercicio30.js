/**
 * Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
caracteres, y al menos una mayúscula, una minúscula, y un dígito.
 */

let contraseña = prompt("Ingrese la contraseña");
let regex = /^(?=(?:.*\d){1})(?=(?:.*[a-z]){1})(?=(?:.*[A-Z]){1})\S{8,12}$/
if (regex.test(contraseña) === false) {
    alert(`La contraseña no tiene las condiciones minimas para ser segura`)
}
else if (regex.test(contraseña) === true) {
    alert(`La contraseña es segura`);
}