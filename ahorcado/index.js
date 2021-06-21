const palabra = "taza";
let intentos = 4;

let letrasPendientes = new Set(palabra).size

function valorPropuesta() {
  return $("#propuesta").val()
}

function borrarPropuesta() {
  $("#propuesta").val("");
}

function mostrarResultado(resultado) {
  $("#resultado").text(resultado);
}

function esPropuestaCorrecta() {
  return valorPropuesta().length == 1 && palabra.includes(valorPropuesta());
}

function perderJuego() {
  mostrarResultado("PERDISTE");
}

function ganarJuego() {
  mostrarResultado("GANASTE");
}

function perderIntento() {
  intentos--;
  $("#cantidad-intentos").text(intentos);
  if (intentos == 0) {
    perderJuego();
  }
}

function probarPropuesta() {
  if (esPropuestaCorrecta()) {
    completarPropuesta();
  } else {
    perderIntento();
  }

  borrarPropuesta();
}

function completarPropuesta() {
  completarLetra(0);
  completarLetra(1);
  completarLetra(2);
  completarLetra(3);

  letrasPendientes--;
  if (letrasPendientes == 0) {
    ganarJuego();
  }
}

function completarLetra(posicion) {
  if (palabra[posicion] == valorPropuesta()) {
    $(`.letra:nth(${posicion})`).text(valorPropuesta());
  }
}

$("#probar-propuesta").click(probarPropuesta);








