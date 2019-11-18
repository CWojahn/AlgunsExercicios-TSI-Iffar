function mensagem(){
  let valor = document.getElementById("texto").value
  if (valor<10){
    alert('Insuficiente');
  } else if (valor <14){
    alert('Bom');
  }else if (valor>14){
    alert('Muito Bom')
  }


}