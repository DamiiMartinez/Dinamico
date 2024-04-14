function elementosChildren(){
    let bloque1 = document.getElementById('bloque1');
    let bloque2 = document.getElementById('bloque2');
    alert('Cantidad de Nodos Hijos DIV 1: ' + bloque1.childNodes.length);
    alert('Cantidad de Nodos Hijos DIV 2: ' + bloque2.childNodes.length);
    let cadena1 = "";
    let cadena2 = "";
    for(let i=0; i<bloque1.childNodes.length; i++){
        if(bloque1.childNodes[i].nodeType == Node.ELEMENT_NODE){
            cadena1 = cadena1 + "DIV 1\n";
        }
    }
    for(let i=0; i<bloque2.childNodes.length; i++){
        if(bloque2.childNodes[i].nodeType == Node.ELEMENT_NODE){
            cadena2 = cadena2 + "DIV 2\n";
        }
    }
    alert(cadena1);
    alert(cadena2);
}

function totalChildren(){
    let bloque1 = document.getElementById('bloque1');
    let bloque2 = document.getElementById('bloque2');
    let count = bloque1.children.length + bloque2.children.length;
    alert('Elementos totales: ' + count);
}