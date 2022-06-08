const elMayor= (a,b)=>(a>b)?a:b;
const tieneMembresia=(miembro)=>(miembro)?'2 dolares':'10dolares';


console.log(tieneMembresia(false))
numeroMayor=elMayor(10,20);   
console.log(numeroMayor);
const amigo=true;
const amigosArr=['Tony','Peter','Dr strange',amigo ?'Thor':'Thanos', elMayor(15,26)/* (()=>'Nick Fury')() */];
console.log(amigosArr);
const nota=82.5;//A+,B,B+
const grado=nota>=95 ? 'A+':
            nota>=90 ? 'A' :
            nota>=85 ? 'B+' :
            nota>=80 ? 'B' :
            nota>=75 ? 'C+' :
            nota>=70 ? 'C' :'F';
console.log({nota,grado});            
            
            
            
