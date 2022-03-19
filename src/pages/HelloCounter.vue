<template>

  <h1>An Example of implementing the same component in Options API style and in Composition API style</h1>

  <div class="p-2">
    <button class="btn-primary" @click="incrementGlobal">Global +</button>
    <button class="btn-primary" @click="decrementGlobal">Global -</button>
    <span class="ml-2"> ( {{ globalCounter }} )</span>
  </div>

  <HelloCounterOptionsApi :global-counter="globalCounter" @increment-global="incrementGlobal"
                          @decrement-global="decrementGlobal"></HelloCounterOptionsApi>

</template>

<script setup lang="ts">
import {ref} from 'vue'
import HelloCounterOptionsApi from "../components/HelloCounterOptionsApi.vue";

const globalCounter = ref(0);

const incrementGlobal = () => {
  globalCounter.value++;
}

const decrementGlobal = () => {
  globalCounter.value--;
}

</script>

<style>
</style>