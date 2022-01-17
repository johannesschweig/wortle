import { expect } from 'chai'
import getters from '../../src/store/getters'
import { GREEN, GREY, YELLOW } from '../../src/constants'

const state = {
  secretWord: 'pppoo',
  guesses: [ 'ppppo'.split('') ],
  activeGuess: 1,
}

const state2 = {
  secretWord: 'pppoo',
  guesses: [ 'xoxoo'.split('') ],
  activeGuess: 1,
}

describe('getters', () => {
  it('returns green char state', () => {
    const actual = getters.getCharState(state)('p', 0)
    expect(actual).equal(GREEN)
  })

  it('returns grey char state', () => {
    let actual = getters.getCharState(state)('x', 0)
    expect(actual).equal(GREY)
    actual = getters.getCharState(state2)('0', 1)
    expect(actual).equal(GREY)
  })

  it('returns yellow char state', () => {
    let actual = getters.getCharState(state)('o', 0)
    expect(actual).equal(YELLOW)
    actual = getters.getCharState(state)('o', 2)
    expect(actual).equal(YELLOW)
  })

  
  it('returns correct key states', () => {
    let actual = getters.getKeyState(state)('p', 0)
    expect(actual).equal(GREEN)
    actual = getters.getKeyState(state)('x', 0)
    expect(actual).equal(GREY)
    actual = getters.getKeyState(state)('o', 0)
    expect(actual).equal(YELLOW)
  })

})
