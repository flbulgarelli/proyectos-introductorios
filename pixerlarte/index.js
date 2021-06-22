// 1. pintarCasilla usando numero
// 2. Refactor + pintarCasilla segun click

function pintarCasilla(casilla) {
  $(casilla).css("background-color", colorPintura());
}

function colorPintura() {
  return $("#pintura").val();
}

function configurarCasilla(numero) {
  $(`.casilla:nth(${numero})`).click(pintarCasillaClickeada)
}

function pintarCasillaClickeada(evento) {
  pintarCasilla(evento.target);
}

configurarCasilla(0);
configurarCasilla(1);
configurarCasilla(2);
configurarCasilla(3);
configurarCasilla(4);
configurarCasilla(5);
configurarCasilla(6);
configurarCasilla(7);
configurarCasilla(8);
configurarCasilla(9);
configurarCasilla(10);
configurarCasilla(11);
configurarCasilla(12);
configurarCasilla(13);
configurarCasilla(14);
configurarCasilla(15);



