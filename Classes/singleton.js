//! Un singleton es una instancia unica de mi clase
/*
Imaginemos que tuvieramos un caso excepcional en el cual solo deberiamos tener una unica 
instancia de la clase  de manera global en toda la aplicaion 
 */
class Singleton{

    static instancia;
    nombre='';

    constructor(nombre='',){
        
        const  a=undefined;
        console.log(a);
        console.log(!a);
        console.log(!!a);
        

         if(!!Singleton.instancia){

            return Singleton.instancia;

         }   
        // console.log(Singleton.instancia);
        Singleton.instancia=this;//esta haciendo referencia a esta instancia de la clase 
        this.nombre=nombre;//un constructor retorna una instancia de la clase 
        //pero no está demás poner el return

        // return this;

    }

}

const instancia1=new Singleton('Ironman');
const instancia2=new Singleton('Spiderman');
const instancia3=new Singleton('Hulk');
console.log(`Nombre en la instancia es ${instancia1.nombre}`);
console.log(`Nombre enla instancia2 es ${instancia2.nombre}`);
console.log(`Nombre enla instancia3 es ${instancia3.nombre}`);
