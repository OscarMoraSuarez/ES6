const racso={

    nombre:'Oscar',
    edad:36,
    imprimir (){
        console.log(`Nombre: ${this.nombre},Edad:${this.edad}`);
    }

}

const pedro = {

    nomnbre: 'Pedro',
    edad: 36

}

/* const melissa = {

    nomnbre: 'Melissa',
    edad: 36

} */

racso.imprimir();
//! No tiene propiedades privadas, no tiene propidades estaticas todo sepuede alterar
function Persona(nombre, edad){

    console.log('se ejecuto está linea');
    this.nombre=nombre;
    this.edad=edad;
    this.imprimir=function(){
        console.log(`Nombre:${this.nombre},Edad:${this.edad}`);
    }
}
const maria=new Persona('Maria',46);
const melissa= new Persona('Melissa',36);
maria.imprimir();
melissa.imprimir();