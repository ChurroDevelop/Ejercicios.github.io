/**
 * Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
Considere que se cobra por m2 y realice el código que representen el algoritmo que le
permita ir generando presupuestos para cada cliente.
 */

let largo = parseFloat(prompt("Ingrese el largo de la habitacion"));
let ancho = parseFloat(prompt("Ingrese el ancho de la habitacion"));
let precioMetro = parseFloat(prompt("Ingrese el valor de pintura por M^2"));
let metros = (largo * ancho);
let total = (metros * precioMetro);

alert(`La habitacion tiene ${largo} M de largo \n Tiene ${ancho} M de ancho \n El valor de la pintura por M^2 es de: ${precioMetro} \n Los M^2 son ${metros} \n El total es de: ${total}`);
