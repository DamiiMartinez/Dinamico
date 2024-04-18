function mensajeSecreto(){
    let i;
    let texto = String( document.getElementById("texto").value);
    let posicion1 = 0;
    let posicion2 = 0;
    let copia = "";
    for(i=0; i<=texto.length; i++){
        if( texto.charAt(i) == '('){
            posicion1=i;
        }
        else if( texto.charAt(i) == ')' ){
            posicion2=i;
            copia = copia.concat(texto.slice(posicion1, posicion2));

            var cadena = copia.split("");
            var cadenaInvertida = cadena.reverse();
            var cadenaUnida = cadenaInvertida.join("");

            texto = texto.replace(copia, cadenaUnida);
            copia = "";
        }
    }
    texto = texto.replaceAll(/[()]/g, '');
    alert( texto );
}