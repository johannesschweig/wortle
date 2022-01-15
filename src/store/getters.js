import { GREEN, YELLOW, GREY} from '../constants'

export default {
  // returns the state of a character on the riddle
  getCharState: (state) => (char, pos) => {
    if (state.secretWord[pos] === char) {
      return GREEN
    } else if (state.secretWord.indexOf(char) != -1) {
      return YELLOW
    } else {
      return GREY
    }
  },
  // returns the state of a character on the keyboard
/* eslint-disable */
  getKeyState: (state) => (char) => {
    return 0
  }
}