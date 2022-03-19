<template>
  <div class="bg-purple-100 p-4">
    <h1>HelloCounter in Options API</h1>
    <div class="flex items-center">
      <div class="basis-1/6">
        <span class="font-bold">
        GlobalCounter:
        </span>
        ( {{ globalCounter }} )
      </div>
      <div class="flex-none">
        <button class="btn-primary" @click="incrementGlobal">+</button>
        <button class="btn-primary"  @click="decrementGlobal">-</button>
      </div>
    </div>
    <div class="flex items-center">
      <div class="basis-1/6">
         <span class="font-bold">
        LocalCounter:
        </span>
        ( {{ localCounter }} )
      </div>
      <div class="flex-none">
        <button class="btn-primary" @click="incrementLocal">+</button>
        <button class="btn-primary"  @click="decrementLocal">-</button>
      </div>
    </div>
    <div>
      <span class="font-bold">LocalMessage:</span>
      <ul v-html="localMessage"></ul>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({

  data() {
    return {
      localCounter: 0,
      localMessage: '<li>init',
      updateCounter : 0
    }
  },

  props: {
    globalCounter: {Number, required: true}
  },

  watch:{
    localCounter() {
      this.onUpdate();
    },
    globalCounter() {
      this.onUpdate();
    },
  },

  methods: {
    incrementLocal: function () {
      this.localCounter++;
    },
    decrementLocal: function ()  {
      this.localCounter--;
    },
    incrementGlobal: function () {
      this.$emit('increment-global');
    },
    decrementGlobal: function ()  {
      this.$emit('decrement-global');
    },
    onUpdate: function () {
      this.updateCounter++;
      this.localMessage = this.localMessage.replace(/<li>updated \(\d+\)/g, '') + `<li>updated (${this.updateCounter})`
    },
  },

  created() {
    this.localMessage += '<li>created'
  },
  mounted() {
    this.localMessage += '<li>mounted'
  }


});
</script>

<style scoped>

</style>