/* 
En javascript hay basiocamenmte dos tipos de datops principales, los primitivos y los objetos, cualquier 
cosa que  no sea un objeto es un primitivo  y tenemos los objetos literales que s pordian definir como
 entidades con pares de valores key y value */
 //? si creo un personaje como constante no congelara la asignacion de propiedades,si no que restingira la dclaracion de lapersonaje apra que no podamos usar mas
let personaje ={
    nombre:"Tony Stark",
    edad:40,
    codeName:"Ironman",
    ubicacion:{
        calle:"falsa",
        numero:"123",
        ciudad:"Malibu",
        coords:{
            lat:34.034,
            lng:-118.70
        }
    },
    vivo:false,
    trajes:["Hulk Buster","Mark 1","Mark 2"],
    'ultima-pelicula':'infinity War'

}
Object.freeze(personaje);
personaje.vivo=true;//si intento cambiar el valor de un porpiedad no se puede debido a Object.freeze
personaje.nacionalidad='Estadounidense';//tampoco se puede asignar un nuevo valor de entrada debido a Object.freeze
personaje.ubicacion.calle='avenida siempre viva';//object.freeze permite hacer modificaciones en los valores que no se ápuntan directamente 
//para poder congelar valores como la calle que esta dentro de un objeto, se haría emdiante Object,freeze, peor pauntando al objeto interno
console.log('%c el nombre del personaje  es','color:yellow;font-weight:bold', personaje.nombre);
console.log({personaje});
console.log(personaje.ubicacion.coords);
console.log(personaje["ubicacion"]["coords"]["lat"]);
console.log('el nuemro de trajes de ironman es ',personaje.trajes.length);
console.log('el ultimo traje de iron man es ',personaje.trajes[personaje.trajes.length-1]);
const x='vivo';
console.log('Vivo?',personaje[x]);
console.log(personaje["ultima-pelicula"]);
//Mas detalles
delete personaje.edad;
console.log(personaje);
const entriesPares=Object.entries(personaje);
console.log(entriesPares);
const properties=Object.getOwnPropertyNames(personaje);
console.log(properties);
const values=Object.values(personaje);
console.log(values);
console.table(personaje);
delete personaje.edad;
console.log(personaje);

