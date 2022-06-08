
//! retorno en funciones que crean objetos
//?desde ECS6 noe s necesario especificar la porpiedad y el nombre, si la porpiedad se llama igual que los parametros
//?si el nombre de la variable es el mismo que el de laporpiedad ECS6 ya sabrà que queremos imprimir o regresar dicha propiedad
function crearPersona(nombre, apellido){

    return{
        nombre,
        apellido,
    }
}
const persona=crearPersona('Oscar','Mora');
console.log(persona);
//?para definir el retorno del objeto creado debo poner sus pòrpiedades entre parentesis en una funcion lambda
const crearPersona2=(nombre,apellido)=>({nombre,apellido})

const persona2=crearPersona2('Alfonso','Suarez');
console.log(persona2);

//!imprimir arguments
function imprimirArgumentos(){
    console.log(arguments);
}
//?las funciones de flecah no reciben la instruccion arguments, pero podemos usar el parametro rest
//?las funciones lambda no crean elm  objeto arguments
//? recoemndaciones, despues del aprametro rest no puede venir nada mas
//? si necesitamos usar una variable antes del parametro rest separamos  con una coma del resto
imprimirArgumentos('hola','soy','un',50,)

const imprimirArgs=(edad,...args)=>{
 
/*   console.log({edad,args}); */
  return args;
}
const [casado,vivo,nombre,saludo]=imprimirArgs(35,true,false,'Oscar','hola');

console.log({casado,vivo,nombre,saludo});
const {apellido:nuevoApellido} = crearPersona2('Alfonso', 'Suarez');
console.log({nuevoApellido});
let tony = {
    nombre: "Tony Stark",
    edad: 40, 
    codeName: "Ironman",
    vivo: false,
    trajes: ["Hulk Buster", "Mark 1", "Mark 2"],
    'ultima-pelicula': 'infinity War'

}
const deconstruir=({nombre,edad=36,codeName,vivo,trajes})=>{
    
    console.log({nombre});
    console.log({edad});
    console.log({codeName});
    console.log({vivo});
    console.log({trajes});

}

deconstruir(tony);

