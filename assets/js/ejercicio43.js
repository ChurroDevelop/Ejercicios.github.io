/**
 * Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
la presencia de comillas y caracteres escapados.
 */

let regex = /"(?:[^"\\]|\\.)*"/g
let palabra = prompt("Ingrese la cadena de texto con o sin comillas dobles");
alert(palabra.match(regex));