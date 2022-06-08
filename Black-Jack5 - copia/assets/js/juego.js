const miModulo=(()=>{

    'use strict';

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    //?arreglo con los puntos de los jugadores 
    
    let puntosJugadores = [];

    //?referencias del html
    const btnPedir = document.querySelector('#btnPedir'),
          btnNuevo = document.querySelector('#btnNuevo'),
          btnDetener = document.querySelector('#btnDetener');

    const divCartasJugadores=document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

    //? esta funcion inicializa el juego      
    const inicializarJuego=(numJugadores=2)=>{

       puntosJugadores =[];
       deck= crearDeck();
       for(let i=0; i< numJugadores; i++){
           puntosJugadores.push(0);
       }
          
         
        puntosHTML.forEach(elem=>elem.innerText=0);
        divCartasJugadores.forEach(elem=>elem.innerHTML='');
        

        btnPedir.disabled = false;
        btnDetener.disabled = false; 
       
    }
    //? Esta funcion crea un nuevo Deck
    const crearDeck = () => {
        deck=[];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }
        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }
        return _.shuffle(deck);
    }

    //? Esta funcion me permite tomar una carta
    const pedirCarta = () => {
    if (deck.length === 0) {
            throw 'No hay cartas en el Deck';/* esta palabra muestra un error en consola */
        }

        return deck.pop();
    }
    
    //?esta funcion retorna el valor de lA carta
    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
    }
    //? Funcion que acumula los puntos 0es primer jugador, ultimo es el pc
    const acumularPuntos=(carta,turno)=>{

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];

    }

    const crearCarta=(carta,turno)=>{

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);

    }
    
    const determinaGanador=()=>{
        const[puntosMinimos,puntosComputadora]=puntosJugadores;
        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Nadie gana :(');
            } else if (puntosMinimos > 21) {
                alert('Computadora gana')
            } else if (puntosComputadora > 21) {
                alert('Jugador Gana');
            } else {
                alert('Computadora Gana')
            }
        }, 100);
    }

    // Turno de la computadora--se dispara cuando el jugador pierde o gana o cuando clickea detener
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora=0;
        do {
            const carta = pedirCarta();
            puntosComputadora=acumularPuntos(carta,puntosJugadores.length-1);
            crearCarta(carta,puntosJugadores.length-1);
            

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinaGanador();
    }

    

    //Eventos
    btnPedir.addEventListener('click', () => {
            
        const carta = pedirCarta();
        const puntosJugador=acumularPuntos(carta,0);
        crearCarta(carta,0);

            if (puntosJugador > 21) {
            console.warn('Lo siento has perdido');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);

        } else if (puntosJugador === 21) {
            console.warn('21, genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugadores[0]);

    })

   
    return {
      nuevoJuego:inicializarJuego        
    };    
})()

    

 


