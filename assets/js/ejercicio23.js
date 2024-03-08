/**
 * Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.
 */

function conversionHora(hora){
    let segundo = hora / 3600;
    return segundo;
}

function conversionKm(km) {
    let metros = km / 1000;
    return metros;
}

let km = parseFloat(prompt("Ingrese la cantidad de kilometros que recorrio el automovil"));
let hora = parseInt(prompt("Ingrese las horas que demoro el vehiculo"));

alert(`La velocidad del vehiculo en metros por segundos es ${conversionKm(km)} ${conversionHora(hora)}`);