<template>
  <div class='wrapper'>
    <div class='content'>
      <div class='keyboard'>
        <Key
          v-for='(state, char) in keys'
          :key='char'
          class='char'
          :char='char'
          :state='state'
          :size='getKeySize'>
        </Key>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Key from './Key.vue'

export default {
  name: 'Keyboard',
  components: {
    Key
  },
  computed: {
    ...mapState({
      keys: state => state.keyboard
    }),
    getKeySize() {
      // Breakpoints: 375: 32
      let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (width < 500) {
        return width/12
      } else if (width < 1000) {
        return width/20;
      } else {
        return 48
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: auto 1fr auto;
}
.content {
  grid-column: 2/3;
  display: inline-flex;
  margin: 0 auto;
}
.keyboard {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  border: 1px solid white;
  grid-template-columns: repeat(11, 1fr);
}

/* backspace */
.keyboard:last-child .char:nth-last-child(2) {
  grid-column: 8/10;
  width: 100% !important;
}

/* enter */
.keyboard:last-child .char:nth-last-child(1) {
  grid-column: 10/12;
  width: 100% !important;
}

</style>
