<script setup lang="ts">
    import Header from './components/Header.vue'
</script>

<template>
  <Header></Header>
  <div class="container mx-auto">
  <router-view></router-view>
 </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  padding: 0px;
}
</style>
