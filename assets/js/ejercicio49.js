/**
 *. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
positivos: área triangulo= lado * lado
 */

function areaRectangulo() {
  let lado = parseFloat(prompt("Ingrese el lado del rectangulo"));
  let ladoDos = parseFloat(prompt("Ingrese el lado 2 del rectangulo"));
  if (lado < 0 && ladoDos < 0) {
    alert("No se puede realizar ninguna operacion");
  }
  else if (lado > 0 && ladoDos < 0) {
    alert("No se puede realizar, ya que el lado uno es positivo y el lado dos no");
  }
  else if (lado < 0 && ladoDos > 0) {
    alert("No se puede realizar la operacion, el lado uno es negativo y el lado dos no");
  }
  else {
    return lado * ladoDos;
  }
}

alert(`El area del rectangulo es: ${areaRectangulo()}`);