/**
 * Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.
 */

function conversion() {
    let grados = parseInt(prompt("Ingrese la cantidad de grados que se van a convertir"));
    let f = (1.8 * grados + 32);
    return f;
}
alert(`la conversion de grados a fahrenheit es ${conversion()}`);