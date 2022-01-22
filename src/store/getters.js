import { GREEN, YELLOW, GREY} from '../constants'

export default {
  // returns the state of a character on the riddle
  getCharState: (state) => (char, index) => {
    let result = Array(5).fill('')
    // check for hits and remove them
    let guess = state.guesses[Math.floor(index/5)].join('')
    let yellows = []
    for (let i = 0; i < guess.length;i++) {
      if (guess[i] == state.secretWord[i]) {
        result[i] = GREEN
      } else if (state.secretWord.indexOf(guess[i]) === -1) {
        result[i] = GREY
      } else { // potential yellow
        result[i] = YELLOW
        yellows.push(guess[i])
      }
    }
    // yellows = [...new Set(yellows)]
    // console.log('inter', result)
    // // check for too many yellows (and remove the ones that are too much)
    // for (let i=0;i<yellows.length;i++) {
    //   let numSecret = (state.secretWord.match(new RegExp(yellows[i], "g")) || []).length
    //   let numGuess = (guess.match(new RegExp(yellows[i], "g")) || []).length
    //   if (numGuess > numSecret) {
    //     for (let j=0;j < (numGuess - numSecret);j++) {
    //       result[guess.lastIndexOf(yellows[i])] = GREY
    //     }
    //   }
    // }
    return result[index%5]
    
  },
  // returns the state of a character on the keyboard
  getKeyState: (state) => (char, pos) => {
    if (state.secretWord[pos] === char) {
      return GREEN
    } else if (state.secretWord.indexOf(char) != -1) {
      return YELLOW
    } else {
      return GREY
    }
  },
  // returns if the char in the riddle has already been revealed
  isCharRevealed: (state) => (i) => {
    return i/5 < state.activeGuess
  }
}