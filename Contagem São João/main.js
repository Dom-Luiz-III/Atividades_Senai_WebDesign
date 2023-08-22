// Obtém a data atual
const dataAtual = new Date();

// Define a data do São João (mês começa do zero, ou seja, junho é representado por 5)
const dataSaoJoao = new Date(dataAtual.getFullYear(), 5, 24);

// Calcula a diferença em milissegundos entre as duas datas
const diferenca = dataSaoJoao - dataAtual;

// Calcula os dias, horas, minutos e segundos restantes
let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

// Atualiza os elementos HTML com os valores calculados
document.getElementById("dias").innerText = dias.toString().padStart(2, "0");
document.getElementById("horas").innerText = horas.toString().padStart(2, "0");
document.getElementById("minutos").innerText = minutos.toString().padStart(2, "0");
document.getElementById("segundos").innerText = segundos.toString().padStart(2, "0");

// Função para atualizar a contagem regressiva a cada segundo
function atualizarContagemRegressiva() {
  // Atualiza a data e hora atual
  const dataAtual = new Date();

  // Calcula a diferença em milissegundos entre as duas datas
  const diferenca = dataSaoJoao - dataAtual;

  // Calcula os dias, horas, minutos e segundos restantes
  dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Atualiza os elementos HTML com os novos valores
  document.getElementById("dias").innerText = dias.toString().padStart(2, "0");
  document.getElementById("horas").innerText = horas.toString().padStart(2, "0");
  document.getElementById("minutos").innerText = minutos.toString().padStart(2, "0");
  document.getElementById("segundos").innerText = segundos.toString().padStart(2, "0");

  // Verifica se a contagem regressiva chegou a zero
  if (diferenca <= 0) {
    // Remove o intervalo de atualização da contagem regressiva
    clearInterval(intervalo);
  }
}

// Atualiza a contagem regressiva inicial
atualizarContagemRegressiva();

// Atualiza a contagem regressiva a cada segundo
const intervalo = setInterval(atualizarContagemRegressiva, 1000);
