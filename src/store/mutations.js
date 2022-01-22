import { LOST, WON } from '../constants'
import { getToday } from '../utils'

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
  },
  endGame(state, result) {
    if (result === WON) {
      state.gameState = WON
      state.statistics.gamesWon += 1
      state.statistics.currentStreak += 1
      state.statistics.maxStreak = Math.max(state.statistics.currentStreak, state.statistics.maxStreak)
      state.statistics.guessDist[state.activeGuess - 1] += 1
    } else {
      state.gameState = LOST
      state.statistics.currentStreak = 0
      state.statistics.guessDist.fail += 1
    }
    state.statistics.lastGame = getToday()
    state.statistics.gamesPlayed += 1
  },
  setState(state, payload) {
    for (const [key] of Object.entries(payload)) {
      state[key] = payload[key]
    }
  }
}