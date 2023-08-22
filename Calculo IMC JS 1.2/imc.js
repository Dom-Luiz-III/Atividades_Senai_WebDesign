var peso, alura, media;

function calcular() {

    peso = Number(frmIMC.peso.value.replace(",","."));
    altura = Number(frmIMC.altura.value.replace(",","."));
    media = (peso/(altura * altura));
    frmIMC.txtIMC.value = media.toFixed(2);

    if (media<17){
        imc.style.backgroundImage = "url(imc1.png)";
    }

    else if (media>=17 && media < 18.49) {
        imc.style.backgroundImage = "url(imc2.png)";
    }

    else if (media>=18.49 && media < 24.99) {
        imc.style.backgroundImage = "url(imc3.png)";
    }

    else if (media>=25 && media < 29.99) {
        imc.style.backgroundImage = "url(imc4.png)";
    }

    else if (media>=30 && media < 34.99) {
        imc.style.backgroundImage = "url(imc5.png)";
    }

    else if (media>=35 && media < 39.99) {
        imc.style.backgroundImage = "url(imc6.png)";
    }
  }