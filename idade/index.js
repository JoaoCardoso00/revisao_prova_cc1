// 1 ano = 12 meses
// 1 mes = 30 dias
// 1 dia = 24 horas
// 1 hora = 60 minutos

function converter() {
  //entrada de dados
  var idade = Number(document.getElementById("idade").value);

  //processamento
  var meses = idade * 12;
  var dias = meses * 30;
  var horas = dias * 24;
  var minutos = horas * 60;

  var resultado = `${meses}, ${dias}, ${horas}, ${minutos}`;

  //saída de dados

  var resultadoNaTela = document.getElementById("resultado");
  resultadoNaTela.innerText = resultado;
}
