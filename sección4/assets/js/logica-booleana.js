const regresaTrue=()=>{
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn("Not o la negacion");
console.log(true);//true
console.log(!true);//false
console.log(!false);//true
console.log(!regresaFalse());
////////////////////////////////////
console.warn("And");//true si todos los valores son verdaderos
console.log(true && true);//true
console.log(true && false);//false
console.log(true && !false);//true
console.log(regresaTrue() && regresaTrue());//true
console.log('=====================================');
console.log(regresaFalse() && regresaTrue());//false no se ejecuta el true porque ya retorno false
console.log(regresaTrue() && regresaFalse());//false pero primero ejecuta el true y luego el false para verificar
console.log('=====&&=====');
console.log("cuatro condiciones",true && true && true && false);
console.warn('OR');//por lo menos una condicion debe ser true
console.log(true||false);//true
console.log(false || false);//false
console.log(regresaTrue() || regresaFalse());//true
console.log("cuatro condiciones", true || true || true || false);
//////////////////////////////////////////////////

console.warn('asignaciones');
const soyUndefined=undefined;
const soyNull=null;
const soyFalso=false;
const a1 = false && 'Hola Mundo' && 150;//evalua el ultimo valor, si es falso de entrada no evalaura nada mas
const a2 ='hola' && 'Mundo' && soyFalso && true;//retorna falso porque no todas als condiciones son verdaderas
const a3 = soyFalso || 'ya no soy falso'; //retorna la segunda porque el evalaura al menos una que sea verdadera
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;//retornara el unico valor verdadero o sea el primero que sea verdadero
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;//retornara el unico valor verdadero o sea el primero que sea verdadero
console.log({a1});
console.log({a2});
console.log({a3});
console.log({a4});
console.log({a5});
if (regresaFalse() && regresaTrue() && (true || false || true) ){
    console.log('hacer algo')
}else{
    console.log('ahcer otra cosa')//esto jamás se va a realizar
}

