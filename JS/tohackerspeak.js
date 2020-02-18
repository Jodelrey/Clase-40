/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */

 const toHackerSpeak = (text) => {
     let arrayText = text.split('');
     for (let i = 0; i < arrayText.length; i++) {
        if(arrayText[i] === "a" || arrayText[i] === "A"){
           arrayText[i] = 4;
        } else if(arrayText[i] === "e"|| arrayText[i] === "E"){
            arrayText[i] = 3;
        } else if(arrayText[i] === "i"|| arrayText[i] === "I"){
            arrayText[i] = 1;
        } else if(arrayText[i] === "o"|| arrayText[i] === "O"){
            arrayText [i] = 0;
        } else if (arrayText[i] === "s" || arrayText[i] === "S"){
            arrayText[i] = 5;
        }
         
      }
     return arrayText.join('');
 }
 console.log(toHackerSpeak("I'm a hacker now"));