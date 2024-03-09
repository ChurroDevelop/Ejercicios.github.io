/**
 * En una tienda de HELADO da un descuento por compra a sus clientes con membresía
dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
20% de descuento
 */
let membresia = prompt("Ingrese el tipo de membresia que tiene \n A \n B \n C").toUpperCase();
const helado = 5000;

if (membresia === "A") {
  let descuento = helado * 0.1;
  let total = helado - descuento;
  alert(`El total es ${total} \n Descuento de: ${descuento}`);
}
else if (membresia === "B") {
  let descuento = helado * 0.15;
  let total = helado - descuento;
  alert(`El total es ${total} \n Descuento de: ${descuento}`);
}
else if (membresia === "C") {
  let descuento = helado * 0.2;
  let total = helado - descuento;
  alert(`El total es ${total} \n Descuento de: ${descuento}`);
}
else {
  alert("Se le cobraran", helado);
}
