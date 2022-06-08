const jugadores = {

    DeBruyne: {
        nombre: 'Kevin',
        país: 'Belgica',
        edad: 29
    },
    Mbappe: {
        nombre: 'kylian',
        país: 'Francia',
        edad: 22
    },
    Benzema: {
        nombre: 'Karim',
        país: 'Argelia',
        edad: 34
    },
    DiMaria: {
        nombre: 'Angel',
        país: 'Argentina',
        edad: 35
    },
    Sinisterra: {
        nombre: 'Luis',
        país: 'Colombia',
        edad: 22
    },
    Vinicius: {
        nombre: 'Vinicius',
        país: 'Brasil',
        edad: 22
    },

}
//?Protip
 export const buscarJugador = (id) => {

    const jugador = jugadores[id];

    return new Promise((resolve, reject) => {

        if (jugador) {
            //?simulo en delay
            setTimeout(() => resolve(jugador), 1000);



        } else {

            reject(`No hay un heroe asociado al id ${id}`);

        }



    })


}; 
//?esta es la del await no protip
export const buscarJugadorAsync = async (id) => {

    const jugador = jugadores[id];



    if (!!jugador) {

        return (jugador);

    } else {

        throw Error(`no hay un jugador asociado al id ${id}`);

    }



}

