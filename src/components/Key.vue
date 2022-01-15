<template>
  <div>
    {{ char }}
  </div>
</template>

<script>
export default {
  name: 'Key',
  props: {
    char: String
  }
}
</script>

<style scoped>
div {
  width: 32px;
  height: 32px;
  /* background-color: #2e2e2e; */
  text-align: center;
  line-height: 36px;
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
}

div:hover,
div:active {
  background-color: #525252;
}

</style>
