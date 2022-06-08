/*  return La sentencia return finaliza la ejecución de la función y especifica un valor 
para ser devuelto a quien llama a la función. */

function saludar(nombre) {
    console.log(arguments);
    console.log('hola '+ nombre);
     return [1,2]; 
}


const retornoDeSaludar = saludar('Oscar',40,true,'Colombia');
console.log(retornoDeSaludar[0],retornoDeSaludar[1]);
 ////////////// 
 ///////////////
 //?Usualmente las funciones tiene tareas a ejecutar con entradas y regresar esas entradas porcesadas
 //?ese es la utilidad de l return

function sumar(a,b){

    return a+b;
    /* este console.log nunca se va ejecutar porque esta despues de el return y el return
    siempre finaliza la ejecuciòn de la dfuncion, si una funcion  no tiene un return explicito
    retorna undefined */
    /* console.log('soy un codigo despuies del return'); */

}
console.log(sumar(1,2));

const sumar2=(a,b)=>a+b;

let retornoDeSumar2=sumar2(10,20);
console.log(retornoDeSumar2);

/* let retornoDeSumar=sumar(10,20); */

function getAleatorio(){

    return Math.random()*10;

}

let numeroAleatorio=getAleatorio();
console.log(numeroAleatorio);

const getAleatorio2=()=>Math.random()*10;
let numeroAleatorio2=getAleatorio2();
console.log(numeroAleatorio2);


