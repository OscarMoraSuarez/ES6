import { obtenerJugadoresArr } from "./js/await";
console.log('await')
/* const jugadores=obtenerJugadoresArr(); */
/* console.log(jugadores); */
/* console.table(jugadores); */
obtenerJugadoresArr().then(console.table);  






