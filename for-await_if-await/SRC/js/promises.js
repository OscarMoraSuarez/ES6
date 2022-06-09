const productos={

    jabonRey:{
        nombre:'Jabon Rey',
        presentacion:'barra',
        cantidad:'500gr',
        codigo:12345
    },
    arrozDiana: {
        nombre: 'arroz Diana',
        presentacion: 'bolsa',
        cantidad: '500gr',
        codigo: 123456
    },
    cheetos:{
        nombre:'Cheetos',
        presentacion: 'bolsa',
        cantidad: '25gr',
        codigo: 1234567
    },
    atunDelMar: {
        nombre: 'atun del mar',
        presentacion: 'lata',
        cantidad: '100gr',
        codigo: 12345678
    }


}

export const buscarProducto=(id)=>{
    const producto=productos[id];

    return new Promise((resolve,reject)=>{
        
        if(producto){

            setTimeout(() => {
                
                resolve(producto);

            }, 1000);

            
        }else{
            reject(`no hay un porducto con el nombre ${id}`);
        }
    })  
}

 export const buscarProductoAsync=async(id)=>{

    const producto=productos[id];
        if(producto){
            
                return producto;
            
        }else{
            throw `no hay un porducto con el nombre ${id}`;
        }
 }




