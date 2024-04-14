function agregarElementos(){
    let elementos = document.getElementById('lista')
    if( elementos.hasChildNodes() ){}
    else {
        let texto = document.createTextNode('Elemento');
        let elemento = document.createElement('li');
        let lista = document.getElementById('lista');
        elemento.appendChild(texto);
        lista.appendChild(elemento);
    
    
        let texto1 = document.createTextNode('Elemento');
        let elemento1 = document.createElement('li');
        let lista1 = document.getElementById('lista');
        elemento1.appendChild(texto1);
        lista1.appendChild(elemento1);
        op = false;
    }
}