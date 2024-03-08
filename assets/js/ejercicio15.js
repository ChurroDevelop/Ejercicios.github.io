/**
 * Escribir un programa que calcule la longitud y el área de una circunferencia.
 */

function longitud(diametro){
    let ola = Math.PI;
    return (diametro * ola)
}

function area(radio){
    let si = Math.PI;
    return (si * (Math.pow(radio,2)));
}

let diametro = parseFloat(prompt("Ingrese el diamentro del circulo"));
let radio = diametro / 2;

alert(`El diametro del circulo es: ${longitud(diametro)}`);
alert(`El area del circulo es: ${area(radio)}`);