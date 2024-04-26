function getSeñales(){
    let señales = parseInt( document.getElementById("sen").value );
    let s =[];
    for(let i=0; i<señales; i++){
        let array1 = s.push( Math.floor( Math.random() * 360 ) );
        let array2 = s.push("_");
    }
    alert(s.join(""));
    traducirSeñales( s,señales );
}

function traducirSeñales(señal, l){
    let i;
    longitud=l+l;

    let count = 0;
    let countO = 0;
    let countS = 0;
    let countN = 0;
    let countE = 0;
    let traduccion = [];
    for(i=0; i<longitud; i++){
        if(señal[i]>135 && señal[i]<225){
            let array2 = traduccion.push('O');
            countO++;
        }
        if(señal[i]>225 && señal[i]<315){
            let array3 = traduccion.push('S');
            countS++;
        }
        if( señal[i]>45 && señal[i]<135 ){
            let array1 = traduccion.push('N');
            countN++;
        }
        if( señal[i]>315 || señal[i]<45){
            let array4 = traduccion.push('E');
            countE++;
        }
    }

    alert(traduccion);

    CiclosCompletos( traduccion, l );

    count=countE+countN+countO+countS;

    i=countE*100/count;
    alert('E: ' + i + '%');
    i=countN*100/count;
    alert('N: ' + i + '%');
    i=countO*100/count;
    alert('O: ' + i + '%');
    i=countS*100/count;
    alert('S: ' + i + '%');
}

function CiclosCompletos( traduccion, longitud ){
    let i;
    let sector = 0;
    let count = 0;
    for(i=0; i<longitud; i++){
        sector = i+4;
        let texto = traduccion.slice(i, sector);
        let texto1 = texto.join("");
        count += combinaciones(texto1);       
        sector = 0;
    }
    alert('Ciclos Completos: ' + count);
}

function combinaciones( array ){
    let count = 0;
    let combinaciones = ['NOSE', 'ONES', 'ENOS', 'SONE', 'SENO', 'ESON', 'OSEN', 'NESO'];
    for(let i=0; i<combinaciones.length; i++){
        if(combinaciones[i] == array ){count++;}
    }
    return count;
}



/*

*/