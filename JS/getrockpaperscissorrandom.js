/**
* @name getRockPaperScissorRandomSequence
* @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
*
* @param {number} length - Longitud de la secuencia
* @returns {String[]}
*
* @example
*  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
*/

const getRockPaperScissorRandomSequence = (length) =>{
    rockPaperScissor = ["rock", "paper", 'scissor'];
    let randomRockPaperScissor = [];
    for (let i = 0; i < length; i++) {
        x = Math.round(Math.random() * (rockPaperScissor.length - 1))
        randomRockPaperScissor.push(rockPaperScissor[x]);
        
    }
    return randomRockPaperScissor;
}

console.log(getRockPaperScissorRandomSequence(10));