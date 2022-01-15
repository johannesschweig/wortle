<template>
  <div :style='getStyle'>
    {{ char }}
  </div>
</template>

<script>
export default {
  name: 'Key',
  props: {
    char: String,
    size: Number
  },
  computed: {
    getStyle() {
      return {
        'width': this.size + 'px',
        'height': this.size + 'px',
        'line-height': this.size + 4 + 'px',
        'font-size': this.size - 8 + 'px'
      }
    }
  }
}
</script>

<style scoped>
div {
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
}

div:hover,
div:active {
  background-color: #525252;
}

</style>
