import { GREEN, YELLOW, GREY} from '../constants'

export default {
  // returns the state of a character on the riddle or keyboard
  getCharState: (state) => (char, pos) => {
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