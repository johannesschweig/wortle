import { WON, LOST, START, GREEN, YELLOW, NEUTRAL, ENTER, BACKSPACE } from '../constants'

export default {
  typeKey({ commit, state, getters, dispatch }, char){
    if (state.gameState === START) {
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
            let states = []
            for (let i = 0; i < currentGuess.length; i++) {
              let char = currentGuess.charAt(i)
              let prevState = state.keyboard[char]
              let newState = getters.getKeyState(char, i)
              states.push(newState)

              if ((prevState === NEUTRAL && newState != NEUTRAL) || 
                (prevState === YELLOW && newState === GREEN)) {
                commit('setKeyboardState', {
                  char,
                  state: newState
                })
              }
            }
            commit('incrementActiveGuess')
            // check for win condition
            if (states.toString() === Array(5).fill(GREEN).toString()){
              commit('endGame', WON)
            } else if(state.activeGuess === 6) {
              commit('endGame', LOST)
            }
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
      dispatch('writeToLocalStorage')
    }
  },
  writeToLocalStorage({state}) {
    let tempState = state
    delete tempState.dictionary
    localStorage.setItem('state', JSON.stringify(tempState))
  },
  setState({ commit }, loadedState) {
    commit('setState', loadedState)
  }
}