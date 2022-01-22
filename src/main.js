import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
import { KEYS, BACKSPACE, ENTER } from './constants'
import { getToday } from './utils'

Vue.config.productionTip = false

// key listener
document.addEventListener('keydown', function(event) {
    if (KEYS.indexOf(event.key) != -1) {
      store.dispatch('typeKey', event.key)
    } else if (event.key === 'Enter') {
      store.dispatch('typeKey', ENTER)
    } else if (event.key === 'Backspace') {
      store.dispatch('typeKey', BACKSPACE)
    }
});

new Vue({
  router,
  store,
  render: h => h(App),
  // load localStorage or write new one
  created() {
    // check if local storage is set
    if (localStorage.getItem('state') != null) {
      let loadedState = JSON.parse(localStorage.getItem('state'))
      // load full state if user last played today
      if (loadedState.statistics.lastGame === getToday()) {
        this.$store.dispatch('setState', loadedState)
      } else { // load only statistics
        this.$store.dispatch('setState', { statistics: loadedState.statistics })
      }
    }
  }
}).$mount('#app')
