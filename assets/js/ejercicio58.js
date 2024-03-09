/**
 *. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
zodiacal pertenece, para ello usar if_else anidados.
 */

let mes = prompt("Ingrese el mes en que nacio").toUpperCase();
let dia = parseInt(prompt("Ingrese en el dia que nacio"));

if (mes === "ENERO") {
  if (dia > 0 && dia <= 19) {
    alert("Su signo zodiacal es Capricornio");
  } else if (dia >= 20 && dia <= 31) {
    alert("Su signo zodiacal es Acuario");
  }
} else if (mes === "FEBRERO") {
  if (dia > 0 && dia <= 18) {
    alert("Su signo zodiacal es Acuario");
  } else if (dia >= 19 && dia <= 29) {
    alert("Su signo zodiacal es Piscis");
  }
} else if (mes === "MARZO") {
  if (dia > 0 && dia <= 20) {
    alert("Su signo zodiacal es Piscis");
  } else if (dia >= 21 && dia <= 31) {
    alert("Su signo zodiacal es Aries");
  }
} else if (mes === "ABRIL") {
  if (dia > 0 && dia <= 19) {
    alert("Su signo zodiacal es Aries");
  } else if (dia >= 20 && dia <= 30) {
    alert("Su signo es Tauro");
  }
} else if (mes === "MAYO") {
  if (dia > 0 && dia <= 20) {
    alert("Su signo zodiacal es Tauro");
  } else if (dia >= 21 && dia <= 31) {
    alert("Su signo zodiacal es Geminis");
  }
} else if (mes === "JUNIO") {
  if (dia > 0 && dia <= 20) {
    alert("Su signo es Geminis");
  } else if (dia >= 21 && dia <= 30) {
    alert("Su signo zodiacal es Cancer");
  }
} else if (mes === "JULIO") {
  if (dia > 0 && dia <= 22) {
    alert("Su signoes es Cancer");
  } else if (dia >= 23 && dia <= 31) {
    alert("Su signo zodiacal es Leo");
  }
} else if (mes === "AGOSTO") {
  if (dia > 0 && dia <= 22) {
    alert("Su signo zodiacal es Leo");
  } else if (dia >= 23 && dia <= 31) {
    alert("Su signo zodiacal es Virgo");
  }
} else if (mes === "SEPTIEMBRE") {
  if (dia > 0 && dia <= 23) {
    alert("Su signo zodiacal es Virgo");
  } else if (dia >= 24 && dia <= 30) {
    alert("Su signo zodiacal es Libra");
  }
} else if (mes === "OCTUBRE") {
  if (dia > 0 && dia <= 22) {
    alert("Su signo zodiacal es Libra");
  } else if (dia >= 23 && dia <= 31) {
    alert("Su signo zodiacal es Escorpio");
  }
} else if (mes === "NOVIEMBRE") {
  if (dia > 0 && dia <= 21) {
    alert("Su signo zodiacal es Escorpio");
  } else if (dia >= 22 && dia <= 30) {
    alert("Su signo zodiacal es Sagitario");
  }
}
else if (mes === "DICIEMBRE") {
  if (dia > 0 && dia <= 21) {
    alert("Su signo zodiacal es Sagitario");
  }
  else if (dia >= 22 && dia <= 31) {
    alert("Su signo zodiacal es Capricornio");
  }
}
