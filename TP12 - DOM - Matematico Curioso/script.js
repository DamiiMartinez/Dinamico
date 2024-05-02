function ingresarSemilla(){
    let semilla = parseInt(document.getElementById("semilla").value);
    let array = [semilla];

    for(let i=0; i<array.length; i++){
        if( semilla == 1 ){ }
        else{
            semilla = verificar(semilla, array);
            semilla = array[i+1];
        }
    }
    alert(array);
}

function verificar( semilla, array ){
    let numero=0;
    if( semilla%2 == 0 ){
        numero = semilla/2;
        let vector1 = array.push(numero);
    }
    else{
        numero = semilla*3;
        numero = numero+1;
        let vector2 = array.push(numero);
    }
    return semilla;
}
