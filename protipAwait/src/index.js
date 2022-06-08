import{jugadoresArr}from './js/await'; 
console.time();
jugadoresArr().then(jugadores=>{
    console.table(jugadores);
    console.timeEnd();
}); /* Dbido al setTimeOut se demora unos 4 segundos */