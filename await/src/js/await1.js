import { buscarJugador } from "./promesas";
//? 1 quiero usar biscarJugador y rtornar un arreglo con cada uno de los jugadores en el archivo de pormesas

const jugadoresIds = ['Benzema', 'DeBruyne', 'Mbappe', 'Sinisterra', 'Vinicius', 'DiMaria']
//? 2 esta funcion deberia retornar un arreglo con los jugadores
export const obtenerJugadoresArr = () => {

    const jugadoresArr = [];
    //? 3 Por cada jugador en el arreglo voya usar la funcion asincrona del archivo promesas
    //?4 al hacer el console.log e el index el arreglo estará vacio pero cuando se imprime al tocar la flecha ya tiene valores
    //? es un falso positivo sis e hace un console,table de ese arreglo en el index nos e verà nada
    for (const id of jugadoresIds) {

        buscarJugador(id).then(jugador => {
            jugadoresArr.push(jugador);
        });
    }
    //?5 se puede simular una demora en la resolucion de la promesa, porque en internet asi sucede
    setTimeout(() => {
        console.log('obtener jugadores');
        console.table(jugadoresArr);//?6 aqui si hay elmentos dentro de la tabla contrario al index
        //? la diferencia con esto es que la pormesa no se resuelve hasta pasado un intervalo de tiempo
        //? por eso cuando hago el consle.log en el index no hay nada en la tabla, pero si le digo que espere un
        //? segundo entonces si espera hasta que se ejecute la promesa y por eso esta tiene el tiempo de devolver algo
        //? es decir necesito esperar el resultado para poder usar lo que me devuelve
        //? ver el await1
    }, 1000);




    return jugadoresArr;

}