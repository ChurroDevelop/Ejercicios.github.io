/**
 * Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
calificación se compone de los siguientes porcentajes:
a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
b. 30% de la calificación examen final.
c. 15% de la calificación trabajo final.
 */

let cantidad = parseInt(prompt("Ingrese la cantidad de personas a las cual se les evaluara la nota"));
for (let i = 0; i < cantidad; i++) {
    let p1 = parseFloat(prompt("Ingrese la nota del parcial 1"));
    if (p1 > 10) {
        alert(`No se puede ingresar una nota mayor a 10`)
        p1 = 0;
    }
    else if(p1 < 0){
        alert("No se puede colocar una nota menor a 0")
        p1 = 0;
    }
    let p2 = parseFloat(prompt("Ingrese la nota del parcial 2"));
    if (p2 > 10) {
        alert(`No se puede ingresar una nota mayor a 10`)
        p2 = 0;
    }
    else if(p2 < 0){
        alert("No se puede colocar una nota menor a 0")
        p2 = 0;
    }
    let p3 = parseFloat(prompt("Ingrese la nota del parcial 3"));
    if (p3 > 10) {
        alert(`No se puede ingresar una nota mayor a 10`)
        p3 = 0;
    }
    else if(p3 < 0){
        alert("No se puede colocar una nota menor a 0")
        p3 = 0;
    }


    let exmF = parseFloat(prompt("Ingrese la nota del examen final"));

    if (exmF > 10) {
        alert(`No se puede ingresar una nota mayor a 10`)
        exmF = 0;
    }
    else if(exmF < 0){
        alert("No se puede colocar una nota menor a 0")
        exmF = 0;
    }

    let trbF = parseFloat(prompt("Ingrese la nota del trabajo final"));

    if (trbF > 10) {
        alert(`No se puede ingresar una nota mayor a 10`)
        trbF = 0;
    }
    else if(trbF < 0){
        alert("No se puede colocar una nota menor a 0")
        trbF = 0;
    }

    let promedoP = (p1 + p2 + p3) / 3;
    let valorP = promedoP * 0.55;
    let valorE = exmF * 0.3;
    let valorT = trbF * 0.15;
    let sumaTotal = valorP + valorE + valorT;
    if (sumaTotal >= 7 && sumaTotal <= 10) {
        alert(`El estudiante aprueba con A`);
    }
    else if (sumaTotal >= 5 && sumaTotal < 7) {
        alert(`El estudiante aprueba con R`);
    }
    else if (sumaTotal < 5) {
        alert(`El estudiante desaprueba con D`)
    }
}