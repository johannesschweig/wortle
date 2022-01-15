import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

// TODO select random word and import words
const state = {
  dictionary: ['brühe', 'kurve', 'summe', 'dröge', 'spurt', 'kolik', 'bauer'],
  secretWord: 'kurve',
  guesses: [
    ['k', 'a', 's', 'e', 't'],
    ['u', 'u', 's', 'd', 'd'],
    ['k', 'u', 'r', 'v', 'e'],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ],
  date: '2022-01-15',
  activeGuess: 0
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})