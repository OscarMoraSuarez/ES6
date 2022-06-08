const tabla=document.getElementById('tabla');
const agregar=document.querySelector('#agregar');
const eliminar = document.querySelector('#eliminar');
const tableRow=document.querySelector('.tableRow');
const casillas = tableRow.children;
const tBody=tabla.children[1];
console.log(tBody);

const barraJabon={
    codigo:'1234567',
    producto:'Jabon Rey',
    precio:'$20.00'
}


const propiedades=Object.getOwnPropertyNames(barraJabon);
const values=Object.values(barraJabon);
console.log(propiedades,values);

const addRow=()=>{
   
    const fila=document.createElement('tr');
    const casillaProducto=document.createElement('td');
    const casillaPrecio=document.createElement('td');
    const casillaCodigo=document.createElement('td');
    casillaCodigo.innerText=barraJabon.codigo;
    casillaPrecio.innerText=barraJabon.precio;
    casillaProducto.innerText=barraJabon.producto;
    fila.appendChild(casillaCodigo);
    fila.appendChild(casillaProducto);
    fila.appendChild(casillaPrecio);
    tBody.appendChild(fila);

}

agregar.addEventListener('click',addRow); 



