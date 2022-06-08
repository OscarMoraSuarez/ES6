//?funcion tradicional
nombre='Oscar'
function saludar(nombre) {
    console.log(arguments);    
    alert(`Hola Mundo ${nombre}`);

}
/* var saludar=123;  la declaracion tradicional tiene el problema de que al declarar una variable con 
el nombre de la funcion reasiganar el valor de la variable dejando la funcion de lado*/
saludar(nombre,40,true,'Bogota');
saludar(nombre);
saludar(nombre);
//
//? funcionj anonima
let saludar1=function(nombre){

    alert(`Hola estoy saludando de nuevo${nombre}`);

}
saludar1(nombre);



//?funcion lambda introducidas en ECMAscript 6 las funciones de flcha son mas eficientes que las otras
//! las funciones de flecha evitan problemas con el objeto dist
const loguearSaludo=(nombre)=>{

    console.log(`Hola Mundo ${nombre}`);
}

loguearSaludo(nombre);


 