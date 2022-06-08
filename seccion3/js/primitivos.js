//string
let nombre = 'Peter Parker';
console.log(nombre); 
//si uso el let para el identificador nombre em va a rrojar un error diciendo que el identificador ya fue inicializado
//let nombre = 'Ben Parker'; 
nombre ='Ben Parker'; 
console.log(nombre)
nombre ='Tía May';
nombre=`Tía May`;
//si quiero saber cual es el typo de dato que contiene la variable puedo usar typeof
console.log(typeof nombre);
nombre =123;
console.log(typeof nombre);
let esMarvel = true;
console.log(typeof esMarvel);
let edad=36.0001;
console.log(typeof 36);
let superPoderDeSpiderman;
console.log(typeof superPoderDeSpiderman);//arrojará un undefined porque no se la ha asignado ningún valor
let soyNull=null;
console.log(typeof soyNull);//arrojará object
 //! En javascript todos se maneja como objetos con excepcion de los primitivos
 //? Los simbolos le permiten crear identificadores unicos a javascript
 let symbol1= Symbol('a');
 let symbol2= Symbol('a');  
 console.log(typeof symbol1);
 console.log(symbol1=== symbol2);