//Formula: taxaDeConsumo = km / litros

function converter() {
  //entrada de dados
  var km = Number(document.getElementById("km").value);
  var litros = Number(document.getElementById("litros").value);

  //processamento de dados
  var taxaDeConsumo = km / litros;

  //saída de dados
  var resultadoNaTela = document.getElementById("resultado");
  resultadoNaTela.innerText = taxaDeConsumo;
}
