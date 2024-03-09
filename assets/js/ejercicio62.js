/**
 *Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.
 */

function repetir() {
  let palabra = prompt("Ingrese la palabra");
  for (let i = 0; i < 10; i++) {
    alert(palabra);
    console.log(palabra);
  }
}
repetir();