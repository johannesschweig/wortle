import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import { KEYS, BACKSPACE, ENTER } from './constants'

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
  store,
  render: h => h(App),
}).$mount('#app')
