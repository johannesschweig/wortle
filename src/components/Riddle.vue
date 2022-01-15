<template>
  <div class='riddle'>
    <Character
      v-for='i in 30'
      :key='i' />
  </div>
</template>

<script>
import Character from './Character.vue'

export default {
  name: 'Riddle',
  components: {
    Character
  }
}
</script>

<style scoped>
.riddle {
  margin: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 40px;
}

</style>
