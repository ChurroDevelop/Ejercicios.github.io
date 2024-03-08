/**
 * Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.
 */
let suma = 0;
let regex = /[0-5]/;
for (let i = 0; i < 4; i++) {
    let examen = parseFloat(prompt("Ingrese la nota del examen"))
    console.log(regex.test(examen));
    if (regex.test(examen) === false) {
        examen = 0;
        suma += examen;
    }
    else{
        suma += examen;
    }
}
let promedio = suma / 4;
alert(`El promedio del estudiante es: ${promedio}`);