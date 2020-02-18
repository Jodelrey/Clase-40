/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */

 const getFactorial = (x) => {
    
     if(x===0){
         return 1;
     } else {
         factorial = 1;
         while(x>1){
            factorial = factorial * x;
            x--;
         }
     }
     return factorial;
 }

 console.log(getFactorial(4));