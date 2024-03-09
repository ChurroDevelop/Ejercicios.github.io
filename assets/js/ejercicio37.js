/**
 * Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿cuántos
Kg transporta?
 */

let cajas = parseInt(prompt("Ingrese la cantidad total de cajas"));
let peso = parseInt(prompt("Ingrese el peso de las cajas"));
let pesoTotal = cajas * peso;
alert(`El peso total de las cajas que lleva el transporte es de: ${pesoTotal} \n Cantidad de cajas: ${cajas} \n Peso por caja ${peso}`);