<template>
  <div class='wrapper'>
    <div class='content'>
      <div class='riddle'>
        <Character
          v-for='i in 30'
          :key='i' />
      </div>
    </div>
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
