/**
 * Escribir un programa que calcule el volumen de una esfera.
 */

function volEsfera() {
    let radio = parseFloat(prompt("Ingrese el radio de la esfera"));
    return (1.3 * Math.PI * (Math.pow(radio,3)));
}

alert(`El volumen de la esfera es: ${volEsfera()}`);