/**
 *Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
dura la inversión.
 */

let años = parseInt(prompt("Ingrese el numero de años"));
let capital = 0;

for (let i = 0; i < años; i++) {
    let cantidadI = parseFloat(prompt(`Ingrese la cantidad que va a invertir en el año ${i + 1}`));
    let interes = parseFloat(prompt("Ingrese el interes anual"));
    interes = cantidadI * (interes / 360);
    let inversion = cantidadI + interes;
    capital += inversion;
}

alert(`El capital total que se invirtio para los ${años} años, fue de: ${capital}`);