function ingresarSemilla(){
    let semilla = parseInt(document.getElementById("semilla").value);
    let array = [semilla];
    let numero = 0;
    let count = 1;

    for(let i=0; i<array.length; i++){
        if( semilla == 1 ){ }
        else{
            if( semilla%2 == 0 ){
                numero = semilla/2;
                let vector1 = array.push(numero);
            }
            else if( semilla%2 != 0 ){
                numero = semilla*3;
                numero = numero+1;
                let vector2 = array.push(numero);
            }
            semilla = array[i+1];
        }
    }
    alert(array);
}

/*

    while(p == false){
        if( semilla%2 == 0 ){
            numero = semilla/2;
            let vector1 = array.push(numero);
        }
        else{
            numero = semilla*2;
            numero = numero+1;
            let vector2 = array.push(semilla);
        }
        if( semilla == 1 ){
            p = false;
        }
        semilla = array[count];
        count++;
    }

*/