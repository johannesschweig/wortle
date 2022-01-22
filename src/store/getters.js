import { GREEN, YELLOW, GREY} from '../constants'

export default {
  // returns the state of a character on the riddle
  getCharState: (state) => (char, index) => {
    // check for hits and remove them
    let oldGuess = state.guesses[Math.floor(index/5)].join('')
    let restSecret = ''
    let restGuess = ''
    for (let i = 0; i < oldGuess.length;i++) {
      if (oldGuess[i] != state.secretWord[i]) {
        restSecret += state.secretWord[i]
        restGuess += oldGuess[i]
      }
    }
    if (state.secretWord[index%5] === char) {
      return GREEN
    } else if (restSecret.indexOf(char) != -1) {
      // check if enough other characters are already yellow
      /// find all occurences in guess and secret
      let occGuess = restGuess.split('').reduce(function(a, e, i) {
          if (e === char)
              a.push(i);
          return a;
      }, []);
      let occSecret = (restSecret.match(new RegExp(char, "g")) || []).length
      /// remove occurences from start to end
      for (let i = 0;i<occSecret;i++) {
        occGuess.shift()
      }
      if (occGuess.length && occGuess.indexOf(index) == -1) {
        return YELLOW
      } else {
        return GREY
      }

    } else {
      return GREY
    }
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