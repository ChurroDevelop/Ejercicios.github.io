/**
 *. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
horas trabajadas.
 */

let trabajador = prompt("Ingrese el rol que ejerce en la empresa")
  .toUpperCase()
  .charAt(0);
if (trabajador === "P") {
  let horas = parseInt(prompt("Ingrese la cantidad de horas trabajadas"));
  let total = horas * 20000;
  alert(
    `Tu rol es planta \n Cantidad de horas trabajadas ${horas} \n Pago de hora 20000 \n Total ${total}`
  );
} else if (trabajador === "A") {
  let horas = parseInt(prompt("Ingrese la cantidad de horas trabajadas"));
  let total = horas * 10000;
  alert(
    `Tu rol es administrativo \n Cantidad de horas trabajadas ${horas} \n Pago de hora 10000 \n Total ${total}`
  );
} else {
  alert("No se a elejido ningun rol");
}
