class Tabla{
    constructor(){
        this.Tabla = [];
    }

    agregarValores(nombre, posicion, edad, estatura, peso, nacionalidad){
        this.Tabla.push({ nombre, posicion, edad, estatura, peso, nacionalidad });
    }

    mostrarValores(){
        const cuerpo = document.querySelector('tbody');
        cuerpo.innerHTML='';

        this.Tabla.forEach(Tabla => {
            const fila = document.createElement('tr');
            fila.innerHTML= `   <td>${Tabla.nombre}</td>
                                <td>${Tabla.posicion}</td>
                                <td>${Tabla.edad}</td>
                                <td>${Tabla.estatura} m</td>
                                <td>${Tabla.peso} kg</td>
                                <td>${Tabla.nacionalidad}</td>
            `;
            cuerpo.appendChild(fila);
        });
    }

    listarArgentinos(){
        document.write('<br>' + '<br>' + 'Jugadores Argentinos: ');
        for( const filas of this.Tabla ){
            if( filas.nacionalidad == 'Argentina' ){
                document.write( filas.nombre );
            }
        }
    }

    listarPeso(){
        document.write('<br>' + '<br>' + 'Jugadores entre 75 y 80 kg: ');
        for( const filas of this.Tabla ){
            if( filas.peso >= 75 && filas.peso <= 80 ){
                document.write( filas.nombre );
            }
        }
    }

    mostrarJugadorAlto(){
        let valor = 0;
        let nombres = [];
        document.write('<br>' + '<br>' + 'Jugador/es mas alto/s: ');
        for( const filas of this.Tabla ){
            if( filas.estatura >= valor  ){
                valor = filas.estatura;
                nombres.push( filas.nombre );
            }
        }
        document.write(nombres);
    }
}

const filas = new Tabla();

filas.agregarValores("Fabio1", "G", 43, 1.88, 86, "Brasil");
filas.agregarValores("Marlon4", "D", 28, 1.83, 78, "Brasil");
filas.agregarValores("Marcelo12", "D", 35, 1.73, 72, "Brasil");
filas.agregarValores("Nino33", "D", 26, 1.88, 82, "Brasil");
filas.agregarValores("John Kennedy9", "A", 21, 1.73, 71, "Brasil");
filas.agregarValores("Keno11", "A", 34, 1.78, 72, "Brasil");
filas.agregarValores("German Cano14", "A", 35, 1.78, 81, "Argentina");

filas.mostrarValores();
filas.listarArgentinos();
filas.listarPeso();
filas.mostrarJugadorAlto();