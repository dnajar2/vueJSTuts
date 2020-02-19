<template>
  <div id="app">
    <Header/>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Header
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  color: #2c3e50;
  margin-bottom: 100px;
}
</style>
