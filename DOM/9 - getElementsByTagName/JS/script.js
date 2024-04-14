function cambiarColor(){
    let parrafos = document.getElementsByTagName('p');
    for(let i=0; i<parrafos.length; i++){
        parrafos[i].style.color='red';
    }
}