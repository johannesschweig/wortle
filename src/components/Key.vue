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
  width: 50px;
  height: 50px;
  background-color: #2e2e2e;
  border-radius: 4px;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
}

div:hover {
  background-color: #525252;
}

</style>
