export default {
  setChar(state, payload) {
    let guesses = state.guesses
    guesses[payload.row][payload.col] = payload.char
    // TODO dirty hack, but it does not work otherwise
    state.guesses = []
    state.guesses = guesses
  },
  incrementActiveGuess(state) {
    state.activeGuess += 1
  },
  setKeyboardState(state, payload) {
    state.keyboard[payload.char] = payload.state
  }
}