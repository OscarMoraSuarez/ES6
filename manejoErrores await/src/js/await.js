import { buscarJugadorAsync,buscarJugador } from "./promesas";


const jugadoresIds = ['Benzema', 'DeBruyne', 'Mbappe', 'Sinisterra', 'Vinicius','DiMaria']

export const obtenerJugadoresArr=async()=>{

     return await Promise.all(jugadoresIds.map(buscarJugador));
}

export const obtenerJugadoresAwait=async(id)=>{
//! intenta realizar la tarea de este codigo
    try {

        const jugador=await buscarJugadorAsync(id);
        return jugador;
 //! si algo sale mal entonces has esto       
    } catch (error) {
        console.log('catch')
        /* console.log(error); */
       /*   throw error; //? pero si quiero que se ejecute el catch de la funcion que llama
        //? entonces hago un trow del error y no un console.log del error */
        //? si no quiero que el codigo se reviente puedo retornar un objeto por defecto
        return {
            nombre:'sin nombre',
            pais:'sin pais'
        }

    }
//! dado que estamos usando esta estructura en el await, la funcion que lo llama no llegara al catch
//! ejecutara el then


}