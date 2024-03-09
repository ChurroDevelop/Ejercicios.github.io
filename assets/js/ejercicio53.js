/**
 * Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
de: Iva, Subtotal y Total de la compra de los artículos.
 */
let cantidad = parseInt(prompt("Ingrese la cantidad de productos a calcular"));
let iva = parseInt(prompt("Ingrese el iva"));
iva = iva / 100;
let subTotal = 0, total = 0;
for (let i = 0; i < cantidad; i++) {
  let precio = parseFloat(prompt(`Ingrese el precio del producto ${i + 1}`));
  let sumaIva = precio * iva;
  subTotal += (precio + sumaIva);
  alert(`Subtotal ${subTotal}`);
}
total = subTotal;
alert(`El total es ${total}`);