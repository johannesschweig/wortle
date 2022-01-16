import { GREEN, YELLOW, NEUTRAL, ENTER, BACKSPACE } from '../constants'

export default {
  typeKey({ commit, state, getters }, char){
    let currentGuess = state.guesses[state.activeGuess].join('')
    // Delete character
    if (char === BACKSPACE) {
      // Any characters in current row?
      if (currentGuess != '') {
        commit('setChar', {
          'char': '',
          'row': state.activeGuess,
          'col': currentGuess.length - 1
        })
      }
    } else if (char === ENTER) { // Enter guess
      if (currentGuess.length === 5) { // full row
        // Enforce dictionary as soon as it is large enough
        // if (state.dictionary.indexOf(currentGuess) === -1) {
          // console.log('Wort ist nicht im Wörterbuch')
        // } else {
          // update keyboard state
          for (let i = 0; i < currentGuess.length; i++) {
            let char = currentGuess.charAt(i)
            let prevState = state.keyboard[char]
            let newState = getters.getCharState(char, i)

            if ((prevState === NEUTRAL && newState != NEUTRAL) || 
              (prevState === YELLOW && newState === GREEN)) {
              commit('setKeyboardState', {
                char,
                state: newState
              })
            }
          }
          commit('incrementActiveGuess')
        // }
      }
    } else { // enter character
      // check if current row is full and not submitted
      if (currentGuess.length != 5) {
        // find last empty character
        let index = state.guesses.flat().indexOf('')
        if (index != -1) {
          commit('setChar', {
            'char': char,
            'row': Math.floor(index / 5),
            'col': index % 5
          })
        }
      }
    }
  }
}