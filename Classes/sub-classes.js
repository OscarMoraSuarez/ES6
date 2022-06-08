class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';

    }
    static mensaje() {

        console.log('Hola a todos soy un metodo estatico');

    }

    nombre = '';//inicializar las porpiedades fuera del constructor es opcional
    codigo = '';
    frase = '';
    comida = '';
    constructor(nombre = 'Sin nombre', codigo = 'Sin Codigo', frase = 'Sin frase', comida = 'sin comida') {

        if (!nombre) throw Error('Necesitamos el nombre');
        this.frase = frase;
        this.nombre = nombre;
        this.codigo = codigo;
        Persona._conteo++;
    }
    set setComidaFavorita(comida) {/* Usualmente el set solo recibe un argumento 
    y no pueden tener el mismo nobre de la propiedad sobre la que se aplica*/
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita() {

        return `La comida favorita de ${this.codigo}es ${this.comida}`;

    }
    quienSoy() {

        console.log(`Soy ${this.nombre},y mi identidad es ${this.codigo}`);

    }
    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo}, dice: ${this.frase}`);
    }


}
/* const spiderman = new Persona('Peter', 'Spiderman', 'Un vecino amigable'); */

class Heroe extends Persona{

    clan='Sin clan';
    constructor(nombre,codigo, frase,comida,clan){
        super(nombre,codigo,frase,comida);
        this.clan=clan;


    }
    quienSoy(){

        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }

}

const spiderman=new Heroe('Peter Parker','Spiderman','Tu amigable vecino spiderman','ramen','Avengers');
console.log(spiderman);
spiderman.quienSoy();

