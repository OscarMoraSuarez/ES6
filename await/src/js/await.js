import { buscarJugador } from "./promesas";


const jugadoresIds = ['Benzema', 'DeBruyne', 'Mbappe', 'Sinisterra', 'Vinicius','DiMaria']

export const obtenerJugadoresArr=async()=>{

    const jugadoresArr=[];
    
    for (const id of jugadoresIds) {
        
       const jugador=await buscarJugador(id);
       jugadoresArr.push(jugador);
    }
    
    
    


    return jugadoresArr;/* sin el async await va devolver una rreglode promesas no dejugadores */

}