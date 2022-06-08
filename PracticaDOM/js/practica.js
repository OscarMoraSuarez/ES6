const parent=document.querySelector('.parent');
const encabezado=document.createElement('h1');
const parent2=document.createElement('div');
const parrafo=document.createElement('p');
const texto=document.createTextNode('Esto es un parrafo');
      encabezado.innerText='Hola Mundo';
      parent2.innerHTML ='<h2>Esto es un subtitulo </h2>'
      
      parent.append(encabezado);
      parent.appendChild(parent2);
      parrafo.innerText='esto es un texto de parrafo para una prueba';  
      parent2.appendChild(parrafo);
      parent2.appendChild(texto);

//?
    
    parent.style.textAlign='center';
    encabezado.style.color='lightgreen';
    parent2.style.textAlign='center';

      
      
 



