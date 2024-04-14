function contador(){
    let numero = document.getElementById('h');
    let count = parseInt( numero.childNodes[0].nodeValue );
    numero.childNodes[0].nodeValue = count+1;
}