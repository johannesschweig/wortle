<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  background-color: black;
  color: white;
  margin: 10px;
}

.green {
  background-color: #538d4e;
}

.yellow {
  background-color: #b59f3b;
}

.grey {
  background-color: rgb(61, 61, 61);
}
</style>

<style scoped>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px auto;
  max-width: 500px;
}
</style>
