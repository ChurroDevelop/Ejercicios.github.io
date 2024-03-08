/**
 * Los tramos impositivos para la declaración de la renta en un determinado país son:
a. entre 10000 y 20000 ---- 5%
b. entre 20000 y 35000 ---- 10%
c. entre 35000 y 60000 ---- 20%
d. más de 60000 ---- 45%
escribir un programa que pregunte al usuario su renta anual y muestre por pantalla
el tipo de impositivo que le corresponde
 */

function valores(r){
    if (r >= 10000 && r < 20000) {
        return (r * 0.05) + (r);
    } else if (r >= 20000 && r < 35000) {
        return (r * 0.1) + (r);
    } else if (r >= 35000 && r < 60000) {
        return (r * 0.2) + (r);
    } else if (r >= 60000) {
        return (r * 0.45) + (r);
    }
}

let metros = parseInt(prompt("Ingrese la cantidad de tramos de impositivos que tiene"));
console.log(valores(metros));