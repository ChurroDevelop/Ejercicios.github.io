/**
 * Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
grado: a * x2 + b + x + c, siendo X un valor constante.
 */
function ecuacion(){
    const x = 10;
    let a = parseFloat(prompt("Ingrese el valor de a"));
    let b = parseFloat(prompt("Ingrese el valor de b"));
    let c = parseFloat(prompt("Ingrese el valor de c"));
    return (a * (Math.pow(x,2) + b + x + c));
}

console.log(ecuacion())
alert(`El resultado de la ecuacion es: ${ecuacion()}`);
