/**
 * Escribir un programa que calcule el volumen de un elipsoide.
 * V = 4/3 * pi * a * b * c
 */

function elipsoide() {
    let a = parseFloat(prompt("Ingrese el valor a del elipsoide"));
    let b = parseFloat(prompt("Ingrese el valor b del elipsoide"));
    let c = parseFloat(prompt("Ingrese el valor c del elipsoide"));
    return (1.3 * (Math.PI) * a * b * c);
}

alert(`El volumen del elipsoide es: ${elipsoide()}`);