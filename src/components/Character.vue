<template>
  <div :class='getColor'>
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
    pos: Number
  },
  computed: {
    getColor() {
      //check for empty
      if (this.char.length === 0 || !this.isCharRevealed(this.pos)) {
        return ''
      }
      let col = this.getCharState(this.char, this.pos%5)
      switch(col) {
        case GREEN:
          return 'green'
        case YELLOW:
          return 'yellow'
        default:
          return 'grey'
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
  line-height: var(--char-size);
  text-transform: uppercase;
  user-select: none;
}
</style>
