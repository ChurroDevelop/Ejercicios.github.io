/**
 * Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
minutos.
exprese el resultado en metros/segundo.
 */
function velocidad(){
    let km = parseFloat(prompt("Ingrese los kilometros que recorrio el proyectil"));
    let minutos = parseInt(prompt("Ingrese los minutos que se demoro el proyectil"))
    let metros = km * 1000;
    console.log(metros);
    let segundos = minutos * 60;
    console.log(segundos);
    let vel = metros / segundos;
    console.log(vel);
    return vel;
}

alert(`La velocidad del proyectil es: ${velocidad()} M/S`);