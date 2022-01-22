import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import { ALL_KEYS_NEUTRAL_STATE, START } from '../constants' 
import { WORDS } from '../dictionary.js'
import { randomElementPerDay, getToday } from '../utils'

Vue.use(Vuex)

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
  nr: Math.floor((new Date() - new Date('2022-01-15')) / (1000*60*60*24)) + 1,
  activeGuess: 0,
  keyboard: ALL_KEYS_NEUTRAL_STATE,
  gameState: START,
  statistics: {
    lastGame: getToday(),
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    guessDist: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      fail: 0
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})