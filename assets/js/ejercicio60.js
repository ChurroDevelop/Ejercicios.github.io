/**
 *Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
de cursos es mayor que 6 el pago será únicamente de $1.200.000.
 */

let cursos = parseInt(prompt("Ingrese la cantidad de cursos"));
if (cursos < 6) {
  const valorCurso = 2000000;
  let total = valorCurso * cursos;
  alert(`Debes que pagara un total de ${total}`);
}
else if (cursos >= 6) {
  const valorCurso = 1200000;
  let total = valorCurso * cursos;
  alert(`Debes pagar un total de ${total}`);
}