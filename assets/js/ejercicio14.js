/**
 * Escribir un programa que calcule el área de un triángulo.
 */

function areaTriangulo(){
    let base = parseFloat(prompt("Ingrese la base del triangulo"));
    let altura = parseFloat(prompt("Ingrese la altura del triangulo"));
    return ((base * altura) / 2);
}

alert(`El area del triangulo es: ${areaTriangulo()}`);