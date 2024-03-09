/**
 * Determinar si un número es positivo y menor que 100.
 */

let numero = parseFloat(prompt("Ingrese el numero a verificar"));
if (numero > 0 && numero > 100) {
    alert(`El numero ${numero} es positivo y es mayor a 100`);
}
else if (numero > 0 && numero < 100) {
    alert(`El numero ${numero} es positivo pero no es mayor a 100`);
}
else if (numero < 0) {
    alert(`El numero ${numero} es negativo`);
}