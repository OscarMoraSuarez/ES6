//? El contructor es una funcion que se ejecuta en el momento que se crea una instancia de clase
//? El constructor es el unico metodo que retorna una isntancia de clase y no retorna undefined
//? todas las clases en JS tienen implementado el 'use strict'
class Persona{

    static _conteo = 0;
    static getconteo(){
        return Persona._conteo +' instancias';

    }
    static mensaje(){

        console.log('Hola a todos soy un metodo estatico');

    }
    
    nombre ='';//inicializar las porpiedades fuera del constructor es opcional
    codigo ='';
    frase ='';
    comida='';
 constructor(nombre='Sin nombre',codigo='Sin Codigo',frase='Sin frase',comida='sin comida'){

    if(!nombre) throw Error('Necesitamos el nombre');
    this.frase=frase;
    this.nombre=nombre;
    this.codigo=codigo;
    Persona._conteo++;
}
    set setComidaFavorita(comida){/* Usualmente el set solo recibe un argumento 
    y no pueden tener el mismo nobre de la propiedad sobre la que se aplica*/
         this.comida=comida.toUpperCase();
    }
    get getComidaFavorita(){

        return `La comida favorita de ${this.codigo}es ${this.comida}`;

    }
    quienSoy(){

        console.log(`Soy ${this.nombre},y mi identidad es ${this.codigo}`);  

    }
    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo}, dice: ${this.frase}`);
    }


}
const spiderman=new Persona('Peter','Spiderman','Un vecino amigable');
// const ironMan = new Persona('Tony', 'Ironman', 'Soy Ironman');
console.log(spiderman);
// console.log(ironMan);


spiderman.miFrase();
// ironMan.miFrase();
spiderman.setComidaFavorita='El pie de cereza de la tía May'

console.log(spiderman.getComidaFavorita);
 console.log('Conteo estatico',Persona._conteo);
 console.log(Persona.conteo);
Persona.mensaje();
//!El orden convencional para la construccion de clases serìa
/* 
1 Propiedades y metodos estaticos
2 Propiedades de la clase
3 Constructor
4 Set y Gets
5 Metodos
6 todo lo que es privado al final de la clase

 */
/*
Un se sirve para definir las caracteristicas de una propiedad antes de que se establezca
ejemplo, la comida siempre debe estar en mayuscula 
 */