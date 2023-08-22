var lampadaAcesa = false;
var lampadaInterval;

function ligarLampada() {
  var lampada = document.getElementById("lampada");
  lampada.style.backgroundImage = "url(on.jpg)";
  lampadaAcesa = true;
  clearInterval(lampadaInterval);
}

function desligarLampada() {
  var lampada = document.getElementById("lampada");
  lampada.style.backgroundImage = "url(off.jpg)";
  lampadaAcesa = false;
  clearInterval(lampadaInterval);
}

function piscarLampada() {
  var lampada = document.getElementById("lampada");
  clearInterval(lampadaInterval);

  lampadaInterval = setInterval(function() {
    if (lampadaAcesa) {
      lampada.style.backgroundImage = "url(off.jpg)";
      lampadaAcesa = false;
    } else {
      lampada.style.backgroundImage = "url(on.jpg)";
      lampadaAcesa = true;
    }
  }, 500);
}