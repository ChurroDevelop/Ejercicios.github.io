/**
 *En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.
 */

let edad = parseInt(prompt("Ingrese la edad de la persona"));
let peso = parseFloat(prompt("Ingrese el peso que tiene"));
let altura = parseInt(prompt("Ingrese la altura en cm"));

if (edad <= 19 && peso <= 80 && peso >= 75 && altura >= 175) {
  alert("Cumples los requisitos para participar");
}
else {
  alert("No cumples los requisitos");
}