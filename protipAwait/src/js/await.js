import{buscarJugador, buscarJugadorAsync }from'../js/promise';
const jugadoresIds = ['Benzema', 'DeBruyne', 'Mbappe', 'Sinisterra', 'Vinicius', 'DiMaria']

/*  export const jugadoresArr=async()=>{
    const jugadores=[];
    for (const id of jugadoresIds) {
        
        const jugador=await buscarJugador(id);
        jugadores.push(jugador);
        //?por cada iteracion esta esperando un segundo a que se resuelva la promesa
        //?por eso es tan demorado y son casi 7 segundos en total
    }

   return jugadores; 

} */
/* export const jugadoresArr = async () => {
    const jugadores = [];
    for (const id of jugadoresIds) {

        jugadores.push(buscarJugador(id));
        
        
    }
    //? ejecuto todas las promesas simultaneamente 
    return  await Promise.all(jugadores); 
    //?  Sin el await tambien retornara un falso positivo 
    //? abajo hay una forma mas elegante
} */

export const jugadoresArr = async () => {
    return await Promise.all(jugadoresIds.map(buscarJugador));
    //? sin el Promise.all, retorna un arreglo de promesas, entonces se resuelven 
}      
