/**
 * Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
parte le corresponde a Lorena?
 */

let tapas = parseInt(prompt("Ingrese la cantidad total de tapas que se recolectaron"));
let martin = (tapas * 2) / 3;
let jairo = (tapas * 1) / 4;
let lorena = (tapas - martin - jairo);
alert(`La cantidad total de tapas fueron ${tapas} \n Martin: ${martin} \n Jairo: ${jairo} \n Lorena: ${lorena}`);