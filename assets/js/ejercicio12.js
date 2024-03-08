/**
 * Escribir un programa que calcule el área de un rectángulo:
 */

function areaRectangulo(){
    let base = parseFloat(prompt("Ingrese la base del rectangulo"));
    let altura = parseFloat(prompt("Ingrese la altura del rectangulo"));
    return (base * altura);
}

areaRectangulo();
alert(`El area del rectangulo es: ${areaRectangulo()}`);