//Formula: quantiaEmReais = quantiaEmDolares * cotacaoDoDolar

var cotacaoDoDolar = 5.16;

function converter() {
  //entrada de dados

  var quantiaEmDolares = Number(document.getElementById("dolares").value);

  //processamento de dados
  var quantiaEmReais = quantiaEmDolares * cotacaoDoDolar;

  //saída de dados
  var resultadoNaTela = document.getElementById("resultado");
  resultadoNaTela.innerText = quantiaEmReais;
}
