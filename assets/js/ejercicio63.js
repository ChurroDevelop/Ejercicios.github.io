/**
 *. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
años que ha cumplido (desde 1 hasta su edad).
 */
let edad = parseInt(prompt("Ingrese la edad actual"));
for (let i = 0; i < edad; i++) {
  console.log(edad - i);
}
