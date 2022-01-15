<template>
  <div class='wrapper'>
    <div class='content'>
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
        ['y', 'x', 'c', 'v', 'b', 'n', 'm', '⌫', '⏎']
      ]
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
}

.row {
  display: grid;
  grid-template-columns: repeat(11, 32px);
  height: 40px;
}

/* backspace */
.row:last-child .char:nth-last-child(2) {
  grid-column: 8/10;
  width: 100%;
}

/* enter */
.row:last-child .char:nth-last-child(1) {
  grid-column: 10/12;
  width: 100%;
}

</style>
