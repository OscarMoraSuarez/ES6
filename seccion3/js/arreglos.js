//los arreglos son objetos muy parecidos a una lista de informacion que puede contener o no datos del mismo tipo.
//Los arreglos pueden contener desde caracteres simples pasando por strings, objetos, mas arreglos y numeros.
let vowels= ['a','e','i','o','u'];
console.log('%c las vocales son','color:green;font-weight:bold',vowels);
const arr= new Array(10);//esta es una forma alterna de crear arreglos pero no es la mas usada
console.log(arr);
let videoJuegos = ['Super Mario 3','Chrono Trigger','ninja Tutles','Mega Man'];
console.log(videoJuegos[0]);
let arregloCosas=[true,'123','Oscar',1+3,function(){},()=>{},persona={
    nombre:'Oscar',
    edad:36,
    peso:85
},
['goku','vegeta','Kulilin','Pikolo',['freezer','Koler','Cell']]];
console.log(arregloCosas[0]);
console.log(arregloCosas[7][4][2]);