import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import { NEUTRAL } from '../constants' 
import { WORDS } from '../dictionary.js'

Vue.use(Vuex)
console.log(WORDS)

// TODO select random word and import words
const state = {
  dictionary: WORDS,
  secretWord: 'amsel',
  guesses: [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ],
  date: '2022-01-15',
  activeGuess: 0,
  keyboard: {
    'q': NEUTRAL,
    'w': NEUTRAL,
    'e': NEUTRAL,
    'r': NEUTRAL,
    't': NEUTRAL,
    'z': NEUTRAL,
    'u': NEUTRAL,
    'i': NEUTRAL,
    'o': NEUTRAL,
    'p': NEUTRAL,
    'ü': NEUTRAL,
    'a': NEUTRAL,
    's': NEUTRAL,
    'd': NEUTRAL,
    'f': NEUTRAL,
    'g': NEUTRAL,
    'h': NEUTRAL,
    'j': NEUTRAL,
    'k': NEUTRAL,
    'l': NEUTRAL,
    'ö': NEUTRAL,
    'ä': NEUTRAL,
    'y': NEUTRAL,
    'x': NEUTRAL,
    'c': NEUTRAL,
    'v': NEUTRAL,
    'b': NEUTRAL,
    'n': NEUTRAL,
    'm': NEUTRAL,
    '⌫': NEUTRAL,
    '⏎': NEUTRAL
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})