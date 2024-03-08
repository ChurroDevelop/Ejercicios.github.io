/**
 * Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b
 */
function operacion() {
    let a = parseFloat(prompt("Ingrese el valor de la variable a"));
    let b = parseFloat(prompt("Ingrese el valor de la varibale b"));
    let c = parseFloat(prompt("Ingrese el valor de la variable c"));
    let resultado = ((a + 7 * c) / (b + 2 - a) + (2 * b));
    console.log(resultado)
    return resultado;
}

alert(`El resultado de la operacion matematica es: ${operacion()}`);