class Vehiculo{

    static combustible='gasolina';
     static encenderVehiculo=()=>{

        alert('el vehiculo esta encendido');

     }
    #autonomia=''
    constructor(marca = '', referencia = '', modelo = '', galones ='',kilometro_galon=''){
        this.marca=marca;
        this.referencia=referencia;
        this.modelo=modelo;
        this.galones=galones;
        this.kilometro_galon=kilometro_galon;
        this.#autonomia=this.kilometro_galon*this.galones;


    }

    set setGalones(galones){

        this.galones=parseInt(galones,10);

    }

    get getGalones(){

        return this.galones;

    }

    obtenerDescripcion(){

        console.log(`este es un vehiculo ${this.marca},${this.referencia},modelo ${this.modelo},rendimiento:${this.#autonomia}`);

    }

}

class tractoCamion extends Vehiculo{

 ejes='';
 constructor(ejes='Sin ejes',marca,referencia,modelo,galones,kilometro_galon,){
     super(marca,referencia,modelo,galones,kilometro_galon);
    this.ejes=ejes;

 }   


}

const kenworth = new tractoCamion( 10,'Kenworth1','z-6600','2022','50','25');
console.log({kenworth});
kenworth.setGalones='25';
kenworthcc=kenworth.getGalones;
console.log(kenworthcc);
