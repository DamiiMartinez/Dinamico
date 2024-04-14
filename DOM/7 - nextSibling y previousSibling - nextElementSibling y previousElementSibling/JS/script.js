function nodosHermanos(){
    let count1 = 1;
    let count2 = 1;
    let hermano1 = document.getElementById('texto1');
    let hermano2 = document.getElementById('texto2');
    while(hermano1 != null){
        if(hermano1.nodeType == Node.TEXT_NODE){
            alert('Tabla 1: ' + count1++);
            hermano1 = hermano1.nextSibling;
        }
        if(hermano2.nodeType == Node.TEXT_NODE){
            alert('Tabla 2: ' + count2++);
            hermano2 = hermano2.nextSibling;
        }
        hermano1 = hermano1.nextSibling;
        hermano2 = hermano2.nextSibling;
    }
}