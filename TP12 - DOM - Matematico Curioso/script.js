function ingresarSemilla(){
    let semilla = parseInt(document.getElementById("semilla").value);
    let array = [semilla];
    let numero = 0;

    for(let i=0; i<array.length; i++){
        if( semilla == 1 ){ }
        else{
            if( semilla%2 == 0 ){
                numero = semilla/2;
                let vector1 = array.push(numero);
            }
            if( semilla%2 != 0 ){
                numero = semilla*3;
                numero = numero+1;
                let vector2 = array.push(numero);
            }
            semilla = array[i+1];
        }
    }
    alert(array);
}
