function ocultarDiv(){
    let ocultar = document.getElementById('segundo_parrafo');
    let parrafo = ocultar.getElementsByTagName('p');
    for(let elemento of parrafo){
        elemento.style.display='none';
    }
}