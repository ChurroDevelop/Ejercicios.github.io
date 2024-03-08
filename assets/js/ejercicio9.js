/**
 * Escribir un programa para una empresa que tiene salas de juegos para todas las
edades y quiere calcular de forma automática el precio que debe cobrar a susclientes por entrar. El programa debe preguntar al usuario la edad del cliente y
mostrar el precio de la entrada. 
Si el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€.
 */

function entrada(edad){
    if (edad < 4 ) {
        console.log("Puede entrar gratis");
    }
    else if (edad >= 4 && edad < 18) {
        console.log(`Debes pagar 5€ por tener ${edad} años`);
    }
    else if (edad >= 18) {
        console.log(`Debes pagar 10€ por tener ${edad} años`);
    }
}

let e = parseInt(prompt("Ingrese la edad que tiene el cliente"));
entrada(e);