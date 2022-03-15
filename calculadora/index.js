function soma() {
  //entrada de dados
  var numero1 = Number(document.getElementById("numero1").value);
  var numero2 = Number(document.getElementById("numero2").value);

  //processamento de dados
  var resultado = numero1 + numero2;

  //saída de dados
  var resultadoNaTela = document.getElementById("resultado");
  resultadoNaTela.innerText = resultado;
}

function subtracao() {
  //entrada de dados
  var numero1 = Number(document.getElementById("numero1").value);
  var numero2 = Number(document.getElementById("numero2").value);

  //processamento de dados
  var resultado = numero1 - numero2;

  //saída de dados
  var resultadoNaTela = document.getElementById("resultado");
  resultadoNaTela.innerText = resultado;
}

function multiplicacao() {
  //entrada de dados
  var numero1 = Number(document.getElementById("numero1").value);
  var numero2 = Number(document.getElementById("numero2").value);

  //processamento de dados
  var resultado = numero1 * numero2;

  //saída de dados
  var resultadoNaTela = document.getElementById("resultado");
  resultadoNaTela.innerText = resultado;
}

function divisao() {
  //entrada de dados
  var numero1 = Number(document.getElementById("numero1").value);
  var numero2 = Number(document.getElementById("numero2").value);

  //processamento de dados
  var resultado = numero1 / numero2;

  //saída de dados
  var resultadoNaTela = document.getElementById("resultado");
  resultadoNaTela.innerText = resultado;
}
