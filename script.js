//Crea un objeto cine con las siguientes propiedades
//comida con valor de palomitas
//butacas con valor de 25
//salas con valor de 4
//pelicula con valor de Minios

const cine = {
    comida: 'Palomitas',
    butacas: 25,
    salas: 5,
    pelicula: 'Minios'
}

//Imprime en la consola el objeto cine
console.log(cine);

//Imprime en la consola la propiedad pelicula del objeto cine
console.log(cine.pelicula);



//Parte dos
//Modifica la propiedad pelicula del objeto cine por el valor Aladdin
cine.pelicula = 'Aladdin';

//imprime en la consola el objeto modificado pelicula del objeto cine 
console.log(cine.pelicula);


//Parte 3
//Crea un objeto juego con los siguientes metodos y propiedades
//Propiedades:
//personaje con el valor de bird
//poder con el valor de volar
//puntos con el valor de 15

//Metodos:
//incrementarPuntos que incremente juego.punto por 1 y devuelva el valor de juego.puntos
//accion que muestre en la consola "Puedo Volar"

const juego = {
    personaje: 'Bird',
    poder: 'Volar',
    puntos: 15,
    incrementarPuntos: function(){
        juego.puntos++;
        return juego.puntos;
    },
    accion: function(){
        console.log('Puedo Volar');
    }
}


//impreme en la consola el objeto juego
console.log(juego);

//Manda a llamar el metodo incrementarPuntos del objeto puntos
juego.incrementarPuntos();

//Imprime en la consola la propiedad puntos del objeto juegos
console.log(juego.puntos);

