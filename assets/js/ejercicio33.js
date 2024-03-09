/**
 *  Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.
 */

let edadHijo = parseInt(prompt("Ingrese la edad que tiene el hijo"));
let edadMadre = parseInt(prompt("Ingrese la edad que tiene la madre"));
if (edadMadre >= 14 && edadHijo < edadHijo) {
    let diferencia = edadMadre - edadHijo;
    alert(`La edad de la madre cuando dio a luz su hijo fue de ${diferencia}`);
}
else if(edadMadre < 14){
    alert(`La madre no puede tener hijos ya que no se ha desarrollado`);
}