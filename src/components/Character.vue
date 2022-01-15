<template>
  <div>
    C
  </div>
</template>

<script>
export default {
  name: 'Character'
}
</script>

<style scoped>
div {
  --char-size: 62px;
  width: var(--char-size);
  height: var(--char-size);
  text-align: center;
  border: 1px solid white;
  font-size: calc(var(--char-size) - 20px);
  line-height: var(--char-size);
}

</style>
