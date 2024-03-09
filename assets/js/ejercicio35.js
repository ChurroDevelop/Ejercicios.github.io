/**
 * Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
Después de pagar le sobran $91000. ¿Cuánto dinero tenía?
 */

let llaves = 0;
let presupuesto = parseFloat(prompt("Ingrese el presupuesto que llevaba"));
let bomba = parseFloat(prompt("Ingrese el valor de lo que le costo la bomba"));
let cajas = 0;
for (let i = 0; i < 5; i++) {
    let precioLLave = parseFloat(prompt(`Ingrese el valor de la llave ${i + 1}`));
    llaves += precioLLave;
}
console.log(`El precio total de las llaves fue de ${llaves}`);
for (let j = 0; j < 3; j++) {
    let precioCajas = parseFloat(prompt(`Ingrese el valor de la caja ${j + 1}`));
    cajas += precioCajas;
}
console.log(`El precio total de las tres cajas es de: ${cajas}`);

let total = llaves + bomba + cajas;
if (total > presupuesto) {
    alert(`No te alcanza para realizar esta compra ya que tienes ${presupuesto} y el total es de ${total}`);
}
else if (total <= presupuesto) {
    let restante = presupuesto - total;
    alert(`Te alcanza el presupuesto y te sobran: ${restante}`);
}