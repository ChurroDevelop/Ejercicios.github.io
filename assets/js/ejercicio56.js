/**
 *Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
$100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.
 */

let saldo = parseFloat(prompt("Ingrese el saldo que tiene actualmente"));

if (saldo < 100000) {
  let interes = saldo * 0.03;
  let total = saldo + interes;
  alert(`El total es de: ${total} \n Pago de intereses ${interes}`);
}
else if (saldo >= 100000) {
  let interes = saldo * 0.04;
  let total = saldo + interes;
  alert(`El total es de: ${total} \n Pago de intereses ${interes}`);
}