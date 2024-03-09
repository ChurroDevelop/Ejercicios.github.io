/**
 *. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
obtuvieron las siguientes calificaciones:
a. «a» = menor que 100 y mayor igual que 90
b. «b» = menor que 90 y mayor igual que 80
c. «c» = menor que 80 y mayor igual que 70
d. «d» = menor que 70 y mayor igual que 60
 */
let cantidadA = parseInt(
  prompt("Ingrese la cantidad de alumnso que se van a evaluar")
);
let mayor = 0,
  menor = 100;
for (let i = 0; i < cantidadA; i++) {
  let nota = parseFloat(prompt("Ingrese la nota"));
  if (nota >= 0 && nota <= 100) {
    if (nota <= 100 && nota >= 90) {
      alert(`A`);
      if (nota > mayor) {
        mayor = nota;
      }
    } else {
      if (nota < 90 && nota >= 80) {
        alert("B");
      } else {
        if (nota < 80 && nota >= 70) {
          alert("C");
        } else {
          if (nota < 70 && nota >= 60) {
            alert("D");
          } else {
            if (nota < 60) {
              alert("La nota es muy baja");
              if (nota < menor) {
                menor = nota;
                alert("Se agrego");
              }
            }
          }
        }
      }
    }
  }
}
alert(`La nota mas alta fue de ${mayor}`);
alert(`La nota mas baja fue ${menor}`);
