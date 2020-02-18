function nombreFuncion(){
    //va el codigo que va a ejecutar la funcion
}

//Arrow Function // es anonima
const nombre = ()=>{
    //codigo a ejectuar
}

const imprimirNumerosDel1Al10 = ()=>{
    for (let i = 0; i < 10; i++) {
        console.log(i);
        
    }
}

// para que se ejecute tenemos que invocar la funcion
nombreDeLaFuncion();

const printNumbers = imprimirNumerosDel1Al10 //sin parentesis porque sino la estaria ejecutando
printNumbers();

const getMessage = () => {
    return valorADevolver;
}

const message = getMessage();
alert(message);

const sayHi = (name) => {
    return `Hola ${name}!`;
}
alert(sayHi("Lu"));

//si solo hay un parametro se pueden obviar los parentesis, y si solo tienen una linea de instruccion se pueden obviar las llaves y el return
const sayHi = name => `Hola ${name}`;

const getDouble = x => x*2;
console.log(getDouble(4));

const getResp = x => x > 2 ? 4 : 5; 