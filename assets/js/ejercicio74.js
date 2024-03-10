/**
 * Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
usuario escriba “salir” que terminará.
 */
let palabra = prompt("Ingrese la palabra que se va a repetir");

for (let i = 0; true ; i++) {
    console.log(palabra);
    let salir = prompt("Deseas salir, escribe salir").toUpperCase().charAt(0);
    if (salir === "S") {
        break
    }
}