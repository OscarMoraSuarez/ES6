let a =5;
//? if está esperando un valor booleano; 
if (a>=10) {//! excepciones como undefined, una asignación
console.log('a es mayor o igual  a 10');

}else {
    console.log('a es menor que 10');
}
console.log('fin del porgrama');
const hoy =new Date();
console.log(hoy);
let dia =hoy.getDay();//0:Domingo,1:Lunes,2:Martes...
console.log({dia});
if (dia === 0) {
    console.log('es Domingo');
}else if(dia===1){
    console.log('es Lunes');
}else if(dia===2){
    console.log('es martes');
}else if(dia===3){
    console.log('es miercoles');
}else{
    console.log('es jueves viernes o sabado');
}
//si usar if else o switch, unicamente objetos o arreglos imprimir en consola el dia de la semana
día=2// el día 0 es el domingo

const semana=['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
const imprimeNombreDia=(día)=>{
console.log(semana[día]);
return(`el nombre del día es ${semana[día]}`);
}
const nombreDía=imprimeNombreDia(día);
console.log({nombreDía});

const semana1={

    0:"Domingo",
    1:"Lunes",
    2:"Martes",
    3:"Miercoles",
    4:"Jueves",
    5:"Viernes",
    6:"Sabado"
}
const imprimeNombreDía2=(día)=>{

    console.log(semana1[día]);
    return `el nombre del día es ${semana1[día]}`;
}
let día1=imprimeNombreDía2(día);
console.log(día1);

const semana2={

    0: () => "Domingo",
    1: () => "Lunes",
    2: () => "Martes",
    3: () => "Miercoles",
    4: () => "Jueves",
    5: () => "Viernes",
    6: () => "Sabado"
}
console.log(semana2[día]() || 'día no definido');





