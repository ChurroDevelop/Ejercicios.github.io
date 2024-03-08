/**
 * Escribir un programa que sume, resta, multiplique y divida dos números.
 */
function suma(num1,num2){
    return (num1 + num2);
}

function resta(num1,num2){
    return (num1 - num2);
}

function multi(num1,num2){
    return (num1 * num2);
}

function div(num1,num2){
    return(num1 / num2);
}

let numeroUno = parseFloat(prompt("Ingrese el numero 1"));
let numeroDos = parseFloat(prompt("Ingrese el numero 2"));

let seleccion = prompt("Ingrese la operacion que quiere hacer \n Suma \n Resta \n Multiplicacion \n Division").toUpperCase().charAt(0);
if (seleccion === "S") {
    alert(`Usted a elejido la suma y el resultado es: ${suma(numeroUno,numeroDos)}`);
}
else if (seleccion === "R") {
    alert(`Usted elijio la resta y el resultado es: ${resta(numeroUno,numeroDos)}`);
}
else if (seleccion === "M") {
    alert(`Usted elijio la multiplicacion y el resultado es: ${multi(numeroUno, numeroDos)}`);
}
else if (seleccion === "D") {
    alert(`Usted elijio la division y el resultado es: ${div(numeroUno,numeroDos)}`);
}