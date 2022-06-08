/**
 * Días de la semana abrimos a las once,
 * fines de semana abrimos a las nueve
 */

 //entra al sitio web para verificar si está abierto hoy
 const día=1;//0:Domingo...
 const horaActual = 10;
let horaApertura;
let mensaje;//esta abierto, está cerrado, hoy abrimos a las XX

/* if ([0,6].includes(día)) {
    horaApertura=9; 
    console.log(`Es fin de semana la hora de apertura es ${horaApertura}`);
    if (horaActual>=horaApertura) {
       console.log(`son las ${horaActual}, esta abierto`);
    }else{  
        console.log(`está cerrado hoy abrimos a las ${horaApertura}`);
    }  
}else if([1,2,3,4,5].includes(día)){
    horaApertura=11;
    console.log(`es entre semana la hora de apertura es ${horaApertura}`);
    if (horaActual >= horaApertura) {
        console.log(`son las ${horaActual}, esta abierto`)
    }else{
        console.log(`está cerrado hoy abrimos a las ${horaApertura}` );
    }
}else{
    console.log('introduzca un día de la semana valido');
} */
horaApertura=([0,6].includes(día))? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'esta abierto' : `son las ${horaActual} Está cerrado, hoy abrimos a las ${horaApertura}`;
/* if (horaActual >= horaApertura) {
    mensaje='Esta abierto';
}else{
    mensaje=`Está cerrado, hoy abrimos a las ${horaApertura}`;
} */
console.log({horaApertura,mensaje});
