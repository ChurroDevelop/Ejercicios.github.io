/**
 * Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
que ingresando el costo de los medicamentos calcule el descuento y el precio final.
 */
function remedios(n) {
    let acum = 0;
    for (let i = 0; i < n; i++) {
        console.log(i)
        let total;
        let precio = parseFloat(prompt("Ingrese el precio del producto"));
        let descuento = precio * 0.1;
        alert(`El descuento es de ${descuento}`);
        total = precio - descuento;
        alert(`El precio del producto es ${total}`);
        acum += total;
    }
    return acum
}
let n = parseInt(prompt("Ingrese la cantidad de productos que se van a aplicar descuento"));
alert(`Èl total de los remedios fue de ${remedios(n)}`)