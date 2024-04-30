function filtrarum(){
    window.addEventListener('load', inicio, false);
    document.getElementById('documento').addEventListener('change', cargar, false);
    var archivo = new FileReader();
    archivo.addEventListener('load', leer, false);
    archivo.readAsText(ev)
}