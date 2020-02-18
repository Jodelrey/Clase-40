/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

const getRockPaperScissor = ()=>{
    const rockPaperScissor = ["rock", "paper", 'scissor'];
    i = Math.round(Math.random() * (rockPaperScissor.length - 1))
    return rockPaperScissor[i];
}
console.log(getRockPaperScissor());