function aparecerLista(){
    let texto;
    let lista;
    texto = document.createTextNode('Respuesta 1');
    lista = document.getElementById('opcion1');
    lista.appendChild(texto);
    
    texto = document.createTextNode('Respuesta 2');
    lista = document.getElementById('opcion2');
    lista.appendChild(texto);
    
    texto = document.createTextNode('Respuesta 3');
    lista = document.getElementById('opcion3');
    lista.appendChild(texto);
}