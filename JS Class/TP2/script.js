class Tabla{
    constructor(){
        this.Tabla=[];
    }

    agregarValores(nombre, apellido, nacionalidad, mejorObra, Apublicacion, Fpublicacion){
        this.Tabla.push({nombre, apellido, nacionalidad, mejorObra, Apublicacion, Fpublicacion});
    }

    generarTabla(){
        const tableBody = document.querySelector('tbody');
        tableBody.innerHTML='';

        this.Tabla.forEach(Tabla =>{
            const fila = document.createElement('tr');
            fila.innerHTML= `   <td>${Tabla.nombre}</td>
                                <td>${Tabla.apellido}</td> 
                                <td>${Tabla.nacionalidad}</td>
                                <td>${Tabla.mejorObra}</td>
                                <td>${Tabla.Apublicacion}</td>
                                <td>${Tabla.Fpublicacion}</td>
            `;
            tableBody.appendChild(fila);
        });
    }

    buscarArgentinos(){
        let count = 0;
        for(const fila of this.Tabla){
            if(fila.nacionalidad=="Argentino"){
                count++;
            }
        }
        return count;
    }

    buscarArgentinos(){
        let count = 0;
        for(const fila of this.Tabla){
            if(fila.nacionalidad=="Argentino"){
                count++;
            }
        }
        return count;
    }

    buscarPublicacion(){
        let count = 0;
        for(const fila of this.Tabla){
            if(fila.Apublicacion>=1960 && fila.Apublicacion<=1980){
                count++;
            }
        }
        return count;
    }

    promedioPublicacion(){
        let count = 0;
        let resultado = 0;
        for(const fila of this.Tabla){
            count = fila.Fpublicacion + count;
        }
        resultado = count/8;
        return resultado;
    }

    mostrarAutores(){
        document.write( '<b>' + 'Autores: ' + '</b>');
        for(const fila of this.Tabla){
            document.write('<br>' + fila.nombre + ' ' + fila.apellido);
        }
    }
}

const fila1 = new Tabla();

fila1.agregarValores("Gabriel", "Garcia Marquez", "Colombiano", "Cien Años de Soledad", 1967, 40);
fila1.agregarValores("Julio", "Cortazar", "Argentino", "Rayuela", 1963, 48);
fila1.agregarValores("Isabel", "Allende", "Chilena", "La Casa de los Espectros", 1982, 40);
fila1.agregarValores("Jorge Luis", "Borgues", "Argentino", "Ficciones", 1944, 45);
fila1.agregarValores("Clarice", "Lispector", "Brasilaña", "La Hora de la Estrella", 1977, 56);
fila1.agregarValores("Juan", "Rulfo", "Mexicano", "Pedro Paramo", 1955, 38);
fila1.agregarValores("Carlos", "Fuentes", "Mexicano", "La Region mas Transparente", 1958, 29);
fila1.agregarValores("Eduardo", "Galeano", "Uruguayo", "Las Venas Abiertas de America Latina", 1971, 31);

fila1.generarTabla();

document.write('Cantidad de Argentinos: ' + fila1.buscarArgentinos());
document.write('<br>' + 'Publicaciones entre 1960 y 1980: ' + fila1.buscarPublicacion());
document.write('<br>' + 'Promedio de edades de publicaciones: ' + fila1.promedioPublicacion());
document.write('<br>' + '<br>');
fila1.mostrarAutores();