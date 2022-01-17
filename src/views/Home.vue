<template>
  <div id="home">
    <Navbar />
    <Riddle />
    <Keyboard />
  </div>
</template>

<script>
import Riddle from '../components/Riddle.vue'
import Keyboard from '../components/Keyboard.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Riddle,
    Keyboard,
    Navbar
  }
}
</script>