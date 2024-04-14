function agregarParrafos(){
    let i=0;
    let elemento = document.createElement('p');
    let texto =  document.createTextNode(' Elemento' );
    elemento.appendChild(texto);

    let identificador = document.getElementById('texto');
    let parrafo = document.getElementById('before');

    identificador.insertBefore(elemento, parrafo);
}