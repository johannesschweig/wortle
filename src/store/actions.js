export default {
  typeKey({ commit, state }, char){
    let currentGuess = state.guesses[state.activeGuess].join('')
    // Delete character
    if (char === '⌫') {
      // Any characters in current row?
      if (currentGuess != '') {
        commit('setChar', {
          'char': '',
          'row': state.activeGuess,
          'col': currentGuess.length - 1
        })
      }
    } else if (char === '⏎') { // Enter guess
      // TODO
      console.log('h')
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