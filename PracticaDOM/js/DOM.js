/* debugger; */
let titulo=document.getElementById('encabezado');

let concepto=document.getElementById('concepto');
concepto.style.color='red';

let caracteristicas=document.getElementsByTagName('p');
caracteristicas[0].style.textAlign='right';

let nuevoParrafo=document.createElement('p');
let textoParrafo=document.createTextNode('Aqui va el texto del parrafo');
let datoNuevo=document.getElementById('datos');
//? botones validar y limpiar
const  validarButton = document.querySelector('.validar');
const  limpiarButton=document.querySelector('.limpiar');

datoNuevo.appendChild(nuevoParrafo);
nuevoParrafo.appendChild(textoParrafo);

const validar=()=>{

    let nombre=document.querySelector('.nombre').value;
    let radios = document.getElementsByName('programar');
    let estudia=document.querySelector('.estudiante');
    let valorRadio;
   
    
     for(let i=0;i<radios.length;i++){
        if(radios[i].checked){
            valorRadio=radios[i].value;
        }
    }
    
     if(estudia.checked){

        estudia='SI';

    }else{

        estudia='NO';

    }

     console.log(`Nombre:${nombre}\nPrograma?:${valorRadio}\nEs estudaiante:${estudia}`);
}
const limpiar=()=>{

     document.querySelector('.nombre').value='';
    let radios = document.getElementsByName('programar');
    


    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radios[i].checked=false;

        }
    }
   let estudia=document.querySelector('.estudiante')
    estudia.checked = false;
} 
validarButton.addEventListener('click',validar);
limpiarButton.addEventListener('click',limpiar);