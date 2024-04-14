function recorrer(){
    let count=3;
    let texto = document.getElementById('parrafos');
    let principio = texto.lastElementChild;
    while(principio != null){
        alert('Texto ' + count--)
        principio = principio.previousElementSibling;
    }
}