/**
 * Escribir un programa que calcule el área y el volumen de un cilindro.
 */

function area(radio, altura) {
    return (Math.PI * (Math.pow(radio,2) * altura));
}

function volumen(radio){
    return (Math.pow(radio,2) * Math.PI);
}

let r = parseFloat(prompt("Ingrese el radio del cilindro"));
let h = parseFloat(prompt("Ingrese la altura del cilindro"));

console.log(area(r,h));
console.log(volumen(r));

alert(`El area del cilindro es: ${area(r,h)}`);
alert(`El volumen del clindro es: ${volumen(r)}`);