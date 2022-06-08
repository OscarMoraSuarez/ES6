//?elevear un numero;
/* let resultado;

const elevar=(base,exponente)=>{
    resultado=1;
    for(let i=0;i<=exponente;i++){

        resultado*= base;

    }
    return resultado;
    
}

console.log(elevar(6,5)); */

//?alcance o scope
/* let x=10;
if(true){

    var y=20;// esta variable es visible en todo el entorno;
    let z=30;

    console.log(x+y+z);
}

console.log(x+y); */
//?alcances anidados

/* const humus=function(factor){

    const  ingrediente=function(cantidad,unidad,nombre){

        let cantidadIngrediente=cantidad*factor;
            if(cantidadIngrediente>1){

                unidad+='s';
                
            }

            console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);

    }

    ingrediente(1,"lata","garbanzos");
    ingrediente(0.25, "taza", "tahini");
    ingrediente(0.25, "lata", "jugo de limón");
    ingrediente(1, "diente", "ajo");
    ingrediente(2, "cucharada", "aceite de oliva");
    ingrediente(0.5, "cucharadita", "comino");

}; 
humus(1,1,1,1,1,1);*/
//?Funciones como valores
//Programa de la KGB para lanzar misiles nucleares;
/* let modoSeguro= true;  
const cambiarModo=()=>{
    modoSeguro=!modoSeguro;
    console.log(modoSeguro);
}
let sistemamMisiles={
    lanzar:(momento)=>{

        console.log(`lanzar misil ${momento}`);

    }

}

let lanzamisiles=function(momento){

    sistemamMisiles.lanzar(momento);

}    

 const controlDeLanzamiento=()=>{

    if(modoSeguro){

        lanzamisiles('ahora');   

    }else{
        lanzamisiles = function () {

            console.log('%c no está autorizado', 'color:blue;font-weight:bold');

        }
        lanzamisiles();
        

    }

} 

let cambiarEstado=document.querySelector('.cambiarModo');
let lanzar=document.querySelector('.lanzar');
cambiarEstado.addEventListener('click',cambiarModo);
lanzar.addEventListener('click',controlDeLanzamiento); */

//?elevar funcion flecha

/* const elevar=(base,exponente)=>{
    resultado = 1;
    for(let i=0;i<exponente;i++){

        
        resultado*=base;

    }

    return resultado;

}


console.log(elevar(3, 6)); */
//?Gallijna o huevo?.
/* function gallina(){

    return huevo();

}
function huevo(){

    return gallina();

}

console.log(gallina(),'vino primero'); */

//?diferentes parametros de funcion
/* function elevar(base, exponente=2) {
    
    let resultado=1;
    for(let i=0;i<exponente;i++){

        resultado*=base;

    }
   console.log(resultado);
   return resultado; 
}

// elevar(3,3);
elevar(3); */
//?Argumentos

/* function saludar (nombre,apellido){

    console.log(`Buenas noches ${nombre} ${apellido}`);
    console.log(arguments);
}

saludar('Oscar','Mora'); */

//?funcion recursiva para potenciacion
/* function potencia(base,exponente){
if(exponente==0){
    return 1
}else{

    return base*potencia(base,exponente-1);

}



}
console.log(potencia(2, 3)); */
//?Fibonnacci
/* var fib=(n)=>{

    debugger;
    if(n<=1){
        return 1;
    }
    return fib(n-1)+fib(n-2);

}

console.log(fib(5)); */
//?recursion
/* function conteo(n){

    if(n==8){
        
        return n

    }

    console.log(n+1);
    return conteo(n+1);

}


conteo(0); */
//?recursion factorial


    /* function factorial(numero) {

        resultado=1;
        for(let i=1;i<=numero;i++){

            resultado*=i;

        }

       console.log(resultado);
    }
    
factorial(5);
 */
/* let resultado=1;
function sumatoria(n){

    if(n==0){
        return n;

    }
    resultado*=n;
    return sumatoria(n-1)

}

sumatoria(5);
console.log(resultado);
 */
//? fibonacci ciclo

/*let numbers=[];

 function fibonacci(n){
debugger;
    numbers.push(1,1)
    for(let i=0;i<n;i++){

    let numero=numbers[numbers.length-1]+numbers[numbers.length-2];
    numbers.push(numero);
     
    }
    numbers.shift(0);

}
fibonacci(10)
console.log(numbers); */

/* //?cierre
function multiplicador(factor) { 
    return numero => numero * factor; 
}
let duplicar = multiplicador(2); 
console.log(duplicar(5))
*/
//?recursion 
/* function potencia(base, exponente) { 
    if (exponente == 0) { return 1; } 
    else { 
        return base * potencia(base, exponente - 1); 
    } 
}
console.log(potencia(2, 3)); // → 8 */
//?recursiva encontrar ovjeto
function encontrarSolucion(objetivo) {
    
    function encontrar(actual, historia) { 
        if (actual == objetivo) { 
            return historia; 
         }else if (actual > objetivo) { 
                return null; 
         }else{ 
          return encontrar(actual + 5, `(${historia} + 5)`) || encontrar(actual * 3, `(${historia} * 3)`);
        } 
    } 
                return encontrar(1, "1");
}
// console.log(encontrarSolucion(24)); // → (((1 * 3) + 5) * 3)

console.log(encontrarSolucion(13));
//?ejercicio minimo maximo

const retornarMenos=(a,b,)=>{

    
   return Math.min(a,b);
    
}

console.log(retornarMenos(5, 3,)); 






