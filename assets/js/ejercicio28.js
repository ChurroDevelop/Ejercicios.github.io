/**
 * Calcular el sueldo de un empleado dados como datos de entrada:
a. Nombre.
b. horas de trabajo.
c. pago en hora.
 */

let nombre = prompt("Ingrese el nombre");
let horas = parseInt(prompt("Ingrese la cantidad de horas que trabajo"));
let precioHora = parseFloat(prompt("Ingrese el valor de cada hora"));

let sueldo = horas * precioHora;

alert(`El sueldo de ${nombre} es de: ${sueldo} \n Trabajo: ${horas} \n Precio de la hora: ${precioHora}`);