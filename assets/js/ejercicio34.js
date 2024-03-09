/**
 * Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
depósito.
a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
b. Volumen = PI *(radio^2)* H (altura del depósito).
El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
en segundos.
 */

let radio = parseFloat(prompt("Ingrese el radio del caudal"));
let altura = parseFloat(prompt("Ingrese la altura del caudal"));
let minutos = parseInt(prompt("Ingrese el tiempo que se demoro el caudal en llenar, en minutos"));
let caudal;
let volumen = (Math.PI * (Math.pow(radio,2) * altura));
let segundos = minutos * 60;
caudal = volumen / segundos;
console.log(`caudal : ${caudal} \n radio ${radio} \n altura ${altura} \n segundos ${segundos}`);
alert(`El tiempo estimado para llenar el caudal es de: ${caudal}`);