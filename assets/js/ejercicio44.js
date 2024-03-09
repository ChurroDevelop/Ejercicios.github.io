/**
 * Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
constante el valor de una moneda.
 */
let pesos = parseFloat(prompt("Ingrese la cantidad de pesos colombianos"));
let conversion = prompt("A que deseas convertir los pesos, elija \n Dolares \n Euros").toUpperCase().charAt(0);

if (conversion === "D") {
    let dolar = pesos * 3904.69;
    alert(`Se van a convertir ${pesos} a dolares \n Precio del dolar: 3904.69 \n Total: ${dolar}`);
}
else if (conversion === "E") {
    let euro = pesos * 4273.10;
    alert(`Se van a convertit ${pesos} a euros \n Precio del euro: 4273.10 \n Total: ${euro}`);
}