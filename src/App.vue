<template>
  <div id="app">
    <Navbar />
    <Riddle />
    <Keyboard />
  </div>
</template>

<script>
import Riddle from './components/Riddle.vue'
import Keyboard from './components/Keyboard.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Riddle,
    Keyboard,
    Navbar
  }
}
</script>

<style>
body {
  background-color: black;
  color: white;
  margin: 10px;
}
</style>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px auto;
  max-width: 500px;
}



</style>
