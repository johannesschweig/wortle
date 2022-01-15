<template>
  <div id="app">
    <div id='content'>
      <div id='nav'>
        <h1>Wörtle</h1>
      </div>
      <Riddle />
      <Keyboard />
    </div>
  </div>
</template>

<script>
import Riddle from './components/Riddle.vue'
import Keyboard from './components/Keyboard.vue'

export default {
  name: 'App',
  components: {
    Riddle,
    Keyboard
  }
}
</script>

<style>
body {
  background-color: black;
  color: white;
}
</style>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: 1fr 500px 1fr;
}

#content {
  grid-column: 2 / 3;
}

#nav {
  max-width: 500px;
  width: 100%;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: white;
}

h1 {
  text-transform: uppercase;
}
</style>
