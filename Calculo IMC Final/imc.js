function calcularIMC(event) {
    event.preventDefault();
  
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
  
    const imc = peso / (altura * altura);
    const resultado = document.getElementById('resultado');
    const imagem = document.getElementById('imagem');
  
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)}`;
  
    if (imc < 18.5) {
      imagem.innerHTML = '<img src="imc1.png">';
    } else if (imc >= 18.5 && imc < 24.9) {
      imagem.innerHTML = '<img src="imc2.png">';
    } else if (imc >= 24.9 && imc < 29.9) {
      imagem.innerHTML = '<img src="imc3.png">';
    } else if (imc >= 29.9 && imc < 34.9) {
      imagem.innerHTML = '<img src="imc4.png">';
    } else if (imc >= 34.9 && imc < 39.9) {
      imagem.innerHTML = '<img src="imc5.png">';
    } else {
      imagem.innerHTML = '<img src="imc6.png">';
    }
  }