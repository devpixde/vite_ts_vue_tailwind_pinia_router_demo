<template>
  <CompositionApi @send-message="onMessage" :uk_time="uk_time"></CompositionApi>
</template>

<script setup lang="ts">
import CompositionApi from "./../components/CompositionApi.vue"
import {ref} from "vue";

const uk_time = ref(new Date())

setInterval(() => {
  uk_time.value = new Date(new Date().toLocaleString('en-EN', {timeZone: 'Europe/London'}));
}, 1000)

function onMessage(text) {
  alert(`Your message: ${text}`);
}


</script>

<style scoped>

</style>