/**
 * los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo
y el nombre, el grupo A está formado por las mujeres con un nombre anterior a la
M y los hombres con un nombre posterior a la N y el grupo B por el resto, 
escribir un programa que pregunte al usuario su nombre y sexo y muestre por pantalla el
grupo al que corresponde.
 */

function grupos(nombre,genero){
    let primer = nombre.toLowerCase().charAt(0);
    genero.toLowerCase;
    if (genero === "femenino" && primer <= "m") {
        console.log("Pertenece al grupo A");
    } 
    else if (genero === "masculino" && primer >= "n") {
        console.log("Pertenece al grupo A");
    } 
    else{
        console.log("Pertenece al grupo B");
    }
}

let g = prompt("Ingrese el genero");
let n = prompt("Ingrese el nombre");
grupos(n,g);