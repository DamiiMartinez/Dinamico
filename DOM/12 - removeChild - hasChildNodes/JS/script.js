function agregarTexto(){
    let texto = document.createTextNode('Sed at nulla cursus, viverra magna in, luctus justo.');
    let agregar = document.getElementById('texto');
    agregar.lastChild(agregar.appendChild(texto));
}

function eliminarTexto(){
    let eliminar = document.getElementById('texto');
    if(eliminar.hasChildNodes()){
        eliminar.removeChild(eliminar.firstChild);
    }
}