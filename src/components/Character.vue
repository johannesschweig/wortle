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

.green {
  background-color: rgb(38, 114, 38);
}

.yellow {
  background-color: rgb(167, 167, 64);
}

.grey {
  background-color: rgb(61, 61, 61);
}
</style>
