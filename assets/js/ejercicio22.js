/**
 * Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
minuto cuesta $355 pesos y un IVA 20%
 */

function llamada() {
    const precioMinuto = 355;
    const precioIva = precioMinuto * 0.2;
    let minutos = parseInt(prompt("Ingrese la cantidad de minutos que utilizo en la llamada"));
    let suma = (minutos * precioMinuto) + (minutos * precioIva);
    return suma;
}

alert(`El total de los minutos que duro en la llamada es: ${llamada()}`);