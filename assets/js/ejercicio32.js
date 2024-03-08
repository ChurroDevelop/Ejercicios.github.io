/**
 * Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
producto y el total de la compra.
 */
let suma = 0;
for (let i = 0; i < 5; i++) {
    let producto = parseFloat(prompt(`Ingrese el valor del producto ${i + 1}`));
    if (i < 2) {
        let descuento = producto * 0.05;
        let restaDes = producto - descuento;
        alert(`El descuento del producto es: ${descuento} \n Valor con descuento es: ${restaDes}`);
        suma += restaDes;
    }
    else if (i === 2) {
        suma += producto;
    }
    else if (i >= 3 && i < 5) {
        let descuento = producto * 0.02;
        let restaDes = producto - descuento;
        alert(`El descuento del producto es: ${descuento} \n Valor con descuento es: ${restaDes}`);
        suma += restaDes;
    }
}

alert(`El total de los productos que se registraron es de: ${suma}`);