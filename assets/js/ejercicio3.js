/**
 * Escribir un programa que pida al usuario dos números y muestre por pantalla su
división, si el divisor es cero el programa debe mostrar un error, se debe manejar
mediante excepciones y el mensaje debe ser personalizado.
 */
function div(numeroUno, numeroDos){
    division = numeroUno / numeroDos;
    if (numeroDos === 0) {
        throw Error("Se a presentado un error")
    }
    console.log(`El resultado es ${division}`)
}

try{
    let numeroUno = parseInt(prompt("Ingrese el numero uno"));
    let numeroDos = parseInt(prompt("Ingrese el numero dos"));
    console.log(div(numeroUno,numeroDos));
}
catch(e){
    console.log("El diviendo es 0 toca con otro numero");
}