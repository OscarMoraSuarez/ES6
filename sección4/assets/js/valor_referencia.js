/* Cuando trabajamos con primitivos cualquier tipo de asignacion como la siquiente como cuando lo mandamos
a una funcion como un argumento lo hacemos enviandolo por valor, es decir no importa si transformamosla variable
o le asignamos otro valor no estamos afectando el mismo lugar en memoria*/
let a=10;
let b=a;
a=30;
console.log({a,b});
/* caundo se trabaja con objetos afectamos el mismo lugar en memoria, los objetos a diferencia de los primitivos
son tipos de datos mas complejos que se almacenan en el HEAP y cuando los copiamos no se reservan otro lugar en 
memoria sino que hacemos referencia al objeto guardado en el heap si cambio una porpiedad de una copia
de un objeto se cambiara la porpiedad de la referencia en el heap para romepr la referencia se puede usar el 
operador spread*/
let juan={
    nombre:"Juan"
}
let ana= {...juan};
ana.nombre='Ana';
console.log({juan,ana});

//? ejemplo al crear una funcion que cambia nombre de un objeto recibiendolo por parametro, cambia
//?tamvbien el nombre del objeto copiado.

const cambiaNombre=({...persona})=>{
    persona.nombre="Tony";
    return persona;
}
let peter={
    nombre:"Peter"
}
let tony=cambiaNombre(peter);
console.log({peter,tony}); 
//! el operador spread no es el mismo parametro rest utilizado para capturasr los args
/*
el parametro rest reuno todos los elementos y los pone en una sola varaible en elc aso de args
el operador spread separa lso objetos que apuntan a la misma referencia, en el ejemplo se prentende copiar
un objeto peter dandole el valor tony al nombre, usando el el operador spread se puede asignar un nombre tony,
sin cambiar el nombre de la persona peter 
 */
//? Arreglos
const frutas = ['manzana','pera','piña'];
const otrasFrutas=[...frutas]/* uso spread apra romper la referencia al copiar el array */;
otrasFrutas.push('Mango');
console.table({frutas,otrasFrutas});

/* slice es un metodo propio de los arreglos que dice cortame el 
arreglo y rgresa los elementos que yo especifico, peor si nos e envia ningún argumento regresa un nuevo 
arreglo rompiendo la relacion*/
//?/////////////////////////////////////////////////////////////////////////////
const citricos = ['limon','naranja','mandarina','maracuya'];
console.time('slice');
const otrosCitricos=citricos.slice()
console.timeEnd('slice');
//?////////////////////////////////////////////////////////////////////////
console.time('spread');
const otrosCitricos2 = [...citricos];
console.timeEnd('spread');
////////////////////////////////////////////////////////////////////////////
otrosCitricos.push('lulo');
console.table({citricos,otrosCitricos});
const legumbres=['frijol','lenteja','garbanzo'];
const otrasLegumbres=legumbres.slice('soya');
console.table({legumbres,otrasLegumbres});