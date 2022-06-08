/* Cuando se crea una clase con multiples constructores generalmente estos reciben parametros
estos constructores se ejecutan dependiendo de los parametros que reciban, a esto se le 
conoce como sobrecarga de constructores */
class Persona{

    static crearPersona({nombre,apellido,país}){

        return  new Persona(nombre,apellido,país);

    }
    constructor(nombre,apellido,país){

        this.nombre=nombre;
        this.apellido=apellido;
        this.país=país;

    }

    getInfo(){

        console.log(`info: ${this.nombre},${this.apellido},${this.país}`);

    }

}

const tony={
    nombre:'tony',
    apellido:'Stark',
    país:'EE.UU'

}

const persona2=Persona.crearPersona(tony);

const nombre1='Oscar',apellido1='Mora',país='Colombia';

const persona1 = new Persona(nombre1,apellido1,país);
persona1.getInfo();
persona2.getInfo();