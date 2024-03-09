/**
 * Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
frase invertida.
 */
function invertir(palabra) {
    let cadena = "";
    for (let i = palabra.length-1; i >= 0; i--) {
        cadena += palabra[i];
    }
    return cadena;
}
let p = prompt("Ingrese la cadena de texto que quiere invertir");
alert(`La palabra que se va a invertir es ${p} \n Invertida queda: ${invertir(p)}`);