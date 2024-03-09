/**
 *. Consideramos la asignación de una calificación literal a un rango dado de calificaciones
numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
Asignar la calificación de A equivale a Bien, Menor a 7.5 asignar la calificación de NA No
Aprobado.
 */

let cantidad = parseInt(prompt("Ingrese la cantidad de estudiantes"));
let aprobados = [], desaprobados = [];
for (let i = 0; i < cantidad; i++) {
  let nota = parseFloat(prompt("Ingrese la nota del estudiante"));
  if (nota > 10 || nota < 0) {
    alert("No se puede calcular en que rango esta esta nota");
  } else if (nota <= 10 && nota > 9) {
    aprobados.push(nota);
    alert(`Excelente`);
  } else if (nota <= 9 && nota > 8) {
    aprobados.push(nota);
    alert(`Muy bien`);
  } else if (nota <= 8 && nota >= 7.5) {
    aprobados.push(nota);
    alert("Bien");
  } else if (nota < 7.5) {
    desaprobados.push(nota);
    alert("No has aprobado pendejo");
  }
}

alert(`La nota de los estudiantes aprobados son ${aprobados} \n La nota de los no aprobados fueron ${desaprobados}`);