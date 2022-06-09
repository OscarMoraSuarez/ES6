import { obtenerJugadoresArr,obtenerJugadoresAwait } from "./js/await";
//? si paso un id que no existe el error no estara controlado, me bvota un uncaught
//? tambien me arroja el error throw de la funcion promesa
console.time('await');
obtenerJugadoresAwait('goku')
    .then((jugadores)=>{
        console.log(jugadores);
        console.timeEnd('await');
}).catch(err=>console.warn(err));  
//? se podria pensar que esto es correcto pero estamos trabajando unicamente con la excepcion deesta promesa
//? no se está trebajando con la funcion del await






