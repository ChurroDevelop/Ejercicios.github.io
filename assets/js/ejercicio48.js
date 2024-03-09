/**
 *. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
desea calcular "Triángulo y Círculo: (Escriba T o C):
a. Triangulo = base * altura / 2
b. Circulo = PI * radio**radio
 */

function triangulo() {
  let base = parseFloat(prompt("Ingrese la base del triangulo"));
  let altura = parseFloat(prompt("Ingrese la altura del triangulo"));
  let area = (base * altura) / 2;
  return area;
}

function circulo() {
  let radio = parseFloat(prompt("Ingrese el radio del circulo"));
  let area = Math.PI * Math.pow(radio, 2);
  return area;
}

let eleccion = prompt(
  "Ingrese el area que quiere calcular \n Circulo \n Triangulo"
)
  .toUpperCase()
  .charAt(0);
if (eleccion === "T") {
  alert(`El area del triangulo es ${triangulo()}`);
} else if (eleccion === "C") {
  alert(`El area del circulo es ${circulo()}`);
} else {
  alert("No se elijio ningun volumen");
}
