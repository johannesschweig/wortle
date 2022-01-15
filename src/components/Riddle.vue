<template>
  <div class='wrapper'>
    <div class='content'>
      <div class='riddle'>
        <Character
          v-for='(c, i) in guesses'
          :key='i + "c"'
          :char='c'
          :pos='i%5' />
      </div>
    </div>
  </div>
</template>

<script>
import Character from './Character.vue'
import { mapState } from 'vuex'

export default {
  name: 'Riddle',
  components: {
    Character
  },
  computed: mapState({
    guesses: state => state.guesses.flat()
  })
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
.riddle {
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

</style>
