/**
 *Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
segundo, en caso contrario indicar con un mensaje que la operación no es posible
realizarla.
 */

let numUno = parseFloat(prompt("Ingrese el numero 1"));
let numDos = parseFloat(prompt("Ingrese el numero 2"));
for (let i = 0; true; i++) {
  numUno -= numDos;
  console.log(numUno);
  if (numUno < numDos) {
    break;
  }
}
