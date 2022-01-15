<template>
  <div :class='getColor'>
    {{ char }}    
    <!-- {{ pos }}     -->
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
      if (this.char.length === 0) {
        return ''
      }
      let col = this.getCharState(this.char, this.pos)
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
      'getCharState'
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
}
</style>
