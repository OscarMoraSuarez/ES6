let juegos= ['Zelda','Mario','Metroid','Chrono trigger',1];
console.log('largo:',juegos.length);
let primer = juegos[0];
console.log(primer);
let ultimo=juegos[juegos.length-1];
console.log(ultimo);
juegos.forEach((elemento, indice, arr)=>{

    console.log(elemento,indice,arr);

});
juegos.push('pes98');
console.log({juegos});
nuevaLongitud=juegos.unshift('tetris');
console.log(nuevaLongitud,juegos);
borrado=juegos.pop();
console.log(borrado,juegos);
borrarSegundo=juegos.splice(2,1);
console.log(borrarSegundo);
let indiceMetroid = juegos.indexOf('Metroid');
console.log(indiceMetroid);
