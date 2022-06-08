const createObject=({nombre,apellido,edad,id})=>{

    return{nombre,apellido,edad,id};

}
function addObject (object) {

    myObjects.push(object);


}

function deleteObject(id){

    myObjects=myObjects.filter(object=>object.id!=id)

}

let myObjects=[

   objeto1={
        nombre:'oscar',
        apellido: 'oscar',
        edad:36,
        id:1234
   },

    objeto2 = {
        nombre: 'Tony',
        apellido: 'Stark',
        edad: 41,
        id:12135
    },

    objeto1 = {
        nombre: 'peter',
        apellido: 'Parker',
        edad: 25,
        id:12136
    }

]




const bruceWayne={

    nombre: 'bruce',
    apellido: 'wayne',
    edad: 25,
    id: 12137
}
const batman = createObject(bruceWayne);



addObject(batman); 
deleteObject(12135);

console.log(myObjects);


