/**
 * Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
monto total de la venta, según la cantidad de artículos solicitados durante el día.
 */

let libros = parseInt(prompt("Ingrese la cantidad de libros que se vendieron"));
let cuadernos = parseInt(prompt("Ingrese la cantidad de cuadernos que se vendieron"));
let lapiceros = parseInt(prompt("Ingrese la cantiadd de lapiceros que se vendieron"));

let sumaL, sumaC, sumaLap, total = 0 , cantA;
const valorL = 10000, valorC = 7550, valorLap = 5550;

cantA = libros + cuadernos + lapiceros;

for (let i = 0; i < libros; i++) {
    total += valorL;
}

for (let j = 0; j < cuadernos; j++){
    total += valorC;
}

for (let k = 0; k < lapiceros; k++) {
    total += valorLap;
}

alert(`La cantidad de articulos vendidos fueron ${cantA} \n El total de los articulos vendidos fue de:${total}`);