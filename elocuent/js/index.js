//?triangulo;

/* let expresion ='';

while (expresion.length<=7) {
    
    console.log(expresion);
    expresion+='#';

}
  */

//? numeros de uno al cien con excepciones numerosdivisibles por 3 'fizz', para numeros divisibles 5 'buzz'



/* for(let i=1;i<=100;i++){

    if(i%3==0){

        console.log('fizz');

    }else if(i%5==0){

        console.log('buzz');

    }else{

        console.log(i);

    }
    


} */
//?tablero de ajedrez
/* let limite=100;
let expresion='';
for(let i=0;i<limite;i++){

    for (let j = 0; j < limite; j++){

        if((i+j)%2==0){

            expresion+='#';

        }else{

            expresion+='O';

        }   
        
    
    }

    expresion+='\n';    
    

}

console.log(expresion); */
//? tre ciclos anidados
/* limite=5;

for (let i = 0; i < limite; i++) {

    for (let j = 0; j < limite; j++) {

        for(let k=0;k<limite;k++){

            console.log(`i:${i},j:${j},k:${k},`);


        }


    }

    //  expresion += '\n'; 


} */

const mazo=[]
const deckRojo=[];
const deckNegro=[];
const tipos=['S','H','C','D'];
const especiales=['A','J','Q','K',];

for(let i=1;i<=10;i++){


    for (const tipo of tipos) {
        
        deckNegro.push(i+tipo);
        deckRojo.push(i + tipo);

    }



}


for (const especial of especiales) {
    
    for (const tipo of tipos) {
        
        deckNegro.push(especial+tipo);
        deckRojo.push(especial + tipo);

    }

}

console.log(deckNegro.length);

const reunirMazo=deckNegro.concat(deckRojo);
reunirMazo.sort(()=>Math.random()-0.5);
console.log(reunirMazo);


 
console.log(Math.random()-0.5);
