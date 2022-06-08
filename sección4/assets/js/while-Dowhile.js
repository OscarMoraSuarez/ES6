//si le dpy una condicion verdadera al while lo que este dentro de este se ejecutara infinitamente
//! las condiciones consideradas falsas son undefined, null, false.
const carros=['Ford','Mazda','Honda','Toyota'];
let i=0;
     /* while (i<carros.length) {
        
        console.log(carros[i]);
        i++;    

    }   */ 

    while (carros[i]) {
        if (i===1) {
            /* break; */  /* romep la ejecucion en el primerindice */
            i++;
             continue; /* continua el bucle infinitamente si no se incrementa el indice */
             
        }
        console.log(carros[i]);
        i++;

    }
    console.warn('Do While');
    let j=0;
    do {
        console.log(carros[j])  
        j++;
    } while (carros[j]);




