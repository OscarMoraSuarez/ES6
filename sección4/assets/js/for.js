const heroes=['Batman','Superman','Wonder Woman','Aquaman'];
console.warn('for tradicional');

for (i=0;i<heroes.length;i++){
    
    console.log(heroes[i]);
    

}
console.warn('for Of');
 for (let heroe of heroes) {
    
    console.log({heroe});

} 
console.warn('for in');
for ( let i in heroes) {
    console.log(heroes[i]);
}
