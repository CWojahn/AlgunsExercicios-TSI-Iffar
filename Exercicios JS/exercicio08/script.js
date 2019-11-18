function chamafuncao(){
                 
  let i;
  let numero = document.getElementById("parametro").value
  let texto = "";
  for (i = 0; i < numero; i++) {
    texto+= "AIA " + i + "<br>";
  }
  document.getElementById("lista").innerHTML = texto
}