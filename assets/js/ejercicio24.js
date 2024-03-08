/**
 *  Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -
2.3e-1, -3e2, 23, 3.2).
 */
let regex = /\./
let numero = parseFloat(prompt("Ingrese el numero a verificar"));
console.log(regex.test(numero));

if (regex.test(numero) === true) {
    alert(`El numero que ingreso tiene puntos ${numero}`);
}
else{
    alert(`El numero que ingreso no tiene puntos ${numero}`)
}