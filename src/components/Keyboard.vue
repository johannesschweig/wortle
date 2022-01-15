<template>
  <div class='keyboard'>
    <div
      v-for='row in keys'
      :key='row.join()'
      class='row'>
      <Key
        v-for='char in row'
        :key='char'
        class='char'
        :char='char'>
      </Key>
    </div>
  </div>
</template>

<script>
import Key from './Key.vue'

export default {
  name: 'Keyboard',
  components: {
    Key
  },
  data() {
    return {
      keys: [
        ['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ü'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä'],
        ['y', 'x', 'c', 'v', 'b', 'n', 'm']
      ]
    }
  }
}
</script>

<style scoped>
.keyboard {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  border: 1px solid #2e2e2e;
}

.row {
  display: grid;
  grid-template-columns: repeat(12, 32px);
  height: 40px;
}

</style>
