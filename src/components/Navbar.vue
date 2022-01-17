<template>
  <div class='nav'>
      <div id='nav'>
        <span>Wörtle</span>
        <span>#{{ nr }}</span>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  computed: mapState({
    nr: state => state.nr
  })

}
</script>

<style scoped>
#nav {
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: white;
}

span:first-child {
  font-size: 24px;
  text-transform: uppercase;
}

span:last-child {
  float: right;
}

</style>
