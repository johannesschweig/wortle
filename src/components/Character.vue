<template>
  <div
    :style='getStyle'
    :class='getColor'>
    {{ char }}    
  </div>
</template>

<script>
import { GREEN, YELLOW } from '../constants'
import { mapGetters } from 'vuex'

export default {
  name: 'Character',
  props: {
    char: String,
    index: Number
  },
  computed: {
    getColor() {
      //check for empty
      if (this.char.length === 0 || !this.isCharRevealed(this.index)) {
        return ''
      }
      let col = this.getCharState(this.char, this.index)
      switch(col) {
        case GREEN:
          return 'green'
        case YELLOW:
          return 'yellow'
        default:
          return 'grey'
      }
    },
    getStyle() {
      return {
        'text-transform': this.char === 'ß' ? 'none' : 'uppercase'
      }
    },
    ...mapGetters([
      'getCharState',
      'isCharRevealed'
    ])
  }
}
</script>

<style scoped>
div {
  --char-size: 62px;
  width: var(--char-size);
  height: var(--char-size);
  text-align: center;
  border: 1px solid white;
  font-size: calc(var(--char-size) - 20px);
  font-weight: 500;
  line-height: var(--char-size);
  user-select: none;
}
</style>
