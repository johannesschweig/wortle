import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import { ALL_KEYS_NEUTRAL_STATE } from '../constants' 
import { WORDS } from '../dictionary.js'
import { randomElementPerDay } from '../utils'

Vue.use(Vuex)

// TODO select random word
const state = {
  dictionary: WORDS,
  secretWord: randomElementPerDay(WORDS),
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
  keyboard: ALL_KEYS_NEUTRAL_STATE
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})