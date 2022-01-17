import { GREEN, YELLOW, GREY} from '../constants'

export default {
  // returns the state of a character on the riddle or keyboard
  getCharState: (state) => (char, index) => {
    // check for hits and remove them
    let oldGuess = state.guesses[Math.floor(index/5)].join('')
    let rest = ''
    for (let i = 0; i < oldGuess.length;i++) {
      if (oldGuess[i] != state.secretWord[i]) {
        rest += state.secretWord[i]
      }
    }
    if (state.secretWord[index%5] === char) {
      return GREEN
    } else if (rest.indexOf(char) != -1) {
      return YELLOW
    } else {
      return GREY
    }
  },
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