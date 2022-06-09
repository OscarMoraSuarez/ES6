import { buscarProducto,buscarProductoAsync } from "./promises";

const productosIds = ['jabonRey','arrozDiana','cheetos','atunDelMar'];
const productosPromesas=productosIds.map(buscarProducto);

export const mostrarProductos=async()=>{
    return await Promise.all(productosIds.map(buscarProducto));
}

export  const mostrarProductosAwait=async(id)=>{

    try {
        
        const producto = await buscarProductoAsync(id);
        return producto;

    } catch (error) {
         console.warn('catch');

         const productoIndefinido = {

            nombre: 'no encontrado',
            presentacion: 'no encontrado',
            cantidad: 'no encontrado',
            codigo: 'no encontrado'

        }
        return productoIndefinido;
        /* throw error; */
    }

    

}

export const productosCiclo=async()=>{

    console.time('Productos Ciclo');
    
        /* productosPromesas.forEach(async(p)=>console.log(await p)); */
        //?sincrono
        /*2 for await(const producto of productosPromesas) {

            console.log(producto);

        } */
    
    console.timeEnd('Productos Ciclo');
        //?sincrono
    /*1 //?esta funcion pasa cmo argumento el arreglo, y la pormesa le devuelve una arreglo
    //? ¿que pasa si quiereo recibir de forma independiente cada porducto?
     const productos=await Promise.all(productosPromesas);
     //?esto lo soluciona y devuelve productos de un en uno y no un arreglo
     productos.forEach(producto=>console.log(producto)); 
     console.log(productos);*/
}


export const  productoIfAwait=async(id)=>{

    if ((await buscarProductoAsync(id)).nombre ==='Jabon Rey'){

        console.log('es una barra de 500 gr');
    }else{

        console.log('naaa');

    }



}