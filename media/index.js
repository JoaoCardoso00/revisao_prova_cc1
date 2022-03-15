function media() {
  //entrada de dados
  var numero1 = Number(document.getElementById("numero1").value);
  var numero2 = Number(document.getElementById("numero2").value);
  var numero3 = Number(document.getElementById("numero3").value);
  var numero4 = Number(document.getElementById("numero4").value);

  //processamento de dados

  //somatoria dos numeros / quantidade de numeros
  var resultado = (numero1 + numero2 + numero3 + numero4) / 4;

  //saida de dados
  var resultadoNaTela = document.getElementById("resultado");
  resultadoNaTela.innerText = resultado;
}

function soma() {
  //entrada de dados
  var numero1 = Number(document.getElementById("numero1").value);
  var numero2 = Number(document.getElementById("numero2").value);
  var numero3 = Number(document.getElementById("numero3").value);
  var numero4 = Number(document.getElementById("numero4").value);

  //processamento de dados

  //somatoria dos numeros / quantidade de numeros
  var resultado = numero1 + numero2 + numero3 + numero4;

  //saida de dados
  var resultadoNaTela = document.getElementById("resultado");
  resultadoNaTela.innerText = resultado;
}

// (valorParcial * 100) / valorTotal;

function percentual() {
  //entrada de dados
  var numero1 = Number(document.getElementById("numero1").value);
  var numero2 = Number(document.getElementById("numero2").value);
  var numero3 = Number(document.getElementById("numero3").value);
  var numero4 = Number(document.getElementById("numero4").value);

  //processamento de dados

  // (valorParcial * 100) / valorTotal;
  var total = numero1 + numero2 + numero3 + numero4;

  var resultado1 = (numero1 * 100) / total; // 2
  var resultado2 = (numero2 * 100) / total; // 5
  var resultado3 = (numero3 * 100) / total; // 6
  var resultado4 = (numero4 * 100) / total; // 10

  //var resultadoFinal = `${resultado1}, ${resultado2}, ${resultado3}, ${resultado4}`;

  //saida de dados
  var resultadoNaTela = document.getElementById("resultado");
  var resultadoNaTela2 = document.getElementById("resultado2");
  var resultadoNaTela3 = document.getElementById("resultado3");
  var resultadoNaTela4 = document.getElementById("resultado4");
  resultadoNaTela.innerText = resultado1;
  resultadoNaTela2.innerText = resultado2;
  resultadoNaTela3.innerText = resultado3;
  resultadoNaTela4.innerText = resultado4;
}
