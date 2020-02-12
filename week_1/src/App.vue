<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <twitter-clone msg="Week One Project"/>
  </div>
</template>

<script>
import TwitterClone from './components/twitterClone.vue'

export default {
  name: 'App',
  components: {
    TwitterClone
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
