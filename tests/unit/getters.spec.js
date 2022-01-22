import { expect } from 'chai'
import getters from '../../src/store/getters'
import { GREEN, GREY, YELLOW } from '../../src/constants'

function getState(secretWord, guess) {
  return {
    secretWord,
    guesses: [ guess.split('') ],
    activeGuess: 1
  }
}

let states = [{
    state: getState('pppoo', 'ppppo'),
    result: [GREEN, GREEN, GREEN, GREY, GREEN]
  },{
    state: getState('pppoo', 'xoxoo'),
    result: [GREY, GREY, GREY, GREEN, GREEN]
  },{
    state: getState('xxxoo', 'pooop'),
    result: [GREY, YELLOW, GREY, GREEN, GREY]
  }
]

describe('getters', () => {
  it('returns correct char states', () => {
    let actual = []
    // loop over states
    for (let i=0;i<states.length;i++) {
      // loop over characters in guess
      for (let j=0;j<states[i].state.secretWord.length;j++) {
        actual.push(getters.getCharState(states[i].state)(states[i].state.guesses[0][j], j))
      }
      console.log('actual', actual, 'exp', states[i].result)
      expect(actual).to.eql(states[i].result)
      actual = []
    }
  })
  
  it('returns correct key states', () => {
    let actual = getters.getKeyState(states[0].state)('p', 0)
    expect(actual).equal(GREEN)
    actual = getters.getKeyState(states[0].state)('x', 0)
    expect(actual).equal(GREY)
    actual = getters.getKeyState(states[0].state)('o', 0)
    expect(actual).equal(YELLOW)
  })

})
