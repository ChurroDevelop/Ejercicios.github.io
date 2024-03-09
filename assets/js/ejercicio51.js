/**
 *Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
los $130.000 el descuento será del 15%, de lo contrario no hay descuento.
 */

let pagos = parseFloat(prompt("Ingrese el total vendido en el restaurante"));
let descuento, total;
if (pagos >= 130000) {
  descuento = pagos * 0.15;
  total = pagos - descuento;
  alert(`Se le aplica un descuento del 15% el descuento aplicado es de: ${descuento} \n El total es: ${total}`);
}
else {
  alert("No se te aplica ningun descuento ya que no pasaste de los 150000");
}