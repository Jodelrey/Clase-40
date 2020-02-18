/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

const getBiggestNumber = (numbers) => {
    let biggest = 0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]>biggest){
            biggest = numbers[i];
        }
    }
    return biggest;
}

console.log(getBiggestNumber([0, 64, 82, 74, 2, 9, 1005]));