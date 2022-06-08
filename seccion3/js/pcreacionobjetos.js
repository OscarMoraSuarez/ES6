/* 
    Dependiendo del día un negocio abre entre semana a las 9 de la mañana y 
    los fines de semana abre a las 11;
    fines de semana=[0,1];
    entre semana=[1,6];
    se debe mostrat un mensaje dependiendo del día y la hora de apertura
*/


/* let día=5;
let horaActual=10;
  
let horaApertura = ([1, 5].includes(día)) ? 9  : 
                   ([0 ,6].includes(día)) ? 11 :
                    'introduzca un día valido';

console.log(horaApertura);
let mensaje=(horaActual>=horaApertura)?`esta abierto hoy es ${día} abrimos a las ${horaApertura} son las ${horaActual}`:                     
                                      `esta cerrado hoy es ${día} abrimos a las ${horaApertura} son las ${horaActual}`;                             

console.log(mensaje,horaApertura);  */                                     

/* et nota=5;
let evaluacion=nota>=8.5?'E+':
               nota>=8.0?'E':
               nota>=7.05?'B++':
               nota>=7.00?'B+':
               nota>=6.05?'B':
               nota>=6.00?'B-':'reprobado';
                console.log(nota,evaluacion); */



let acumulado=0;
const valores=['10C','12S','5H','3C','9C'];                

const retornaValor = (carta) => {
    puntos = carta.substring(0, carta.length - 1);
    console.log(puntos);
    puntos = parseInt(puntos, 10);
    acumulado += puntos;
    console.log({ acumulado });
}
const tomarCarta=()=>{
    
   let carta= valores.pop();
   retornaValor(carta);
   if(valores.length===0){
       throw 'no hay ams cartas';
   }

}

let botonPedir=document.querySelector('#pedir').addEventListener('click',tomarCarta);



               

/* retornaValor(carta); */
