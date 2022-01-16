<template>
  <div
    :class='getState'
    :style='getStyle'
    @click='typeKey(char)'>
    {{ char }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { GREEN, YELLOW, GREY } from '../constants'

export default {
  name: 'Key',
  props: {
    char: String,
    state: String,
    size: Number
  },
  computed: {
    getStyle() {
      return {
        'width': this.size + 'px',
        'height': this.size + 'px',
        'line-height': this.size + 4 + 'px',
        'font-size': this.size - 8 + 'px',
        'text-transform': this.char === 'ß' ? 'none': 'uppercase'
      }
    },
    getState() {
      switch(this.state) {
        case GREEN: return 'green'
        case YELLOW: return 'yellow'
        case GREY: return 'grey'
        default: return 'neutral'
      }
    }
  },
  methods: mapActions([
    'typeKey'
  ])
}
</script>

<style scoped>
div {
  text-align: center;
  cursor: pointer;
  user-select: none;
}

div:hover,
div:active {
  background-color: #525252;
}
</style>
