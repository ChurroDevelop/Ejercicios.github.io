/**
 * Una empresa que contrata personal requiere determinar la edad de las personas que
solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
nacieron. Realice el código que representen el algoritmo para solucionar este problema.
 */
let año = new Date();
let nacimiento = parseInt(prompt("Ingrese el año en el que nacio"));
let años = año.getFullYear() - nacimiento;
alert(`El trabajador tiene ${años}`);