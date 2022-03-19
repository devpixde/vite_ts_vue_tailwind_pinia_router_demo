<script setup lang="ts">
import {ref, onMounted, watch} from 'vue'

interface Props {
  globalCounter: number
}

const props = defineProps<Props>();
const emit = defineEmits(['increment-global', 'decrement-global']);

const localCounter = ref(0);
const localMessage = ref('<li>init');
const updateCounter = ref(0);

watch(
    () => {
      return localCounter.value
    },
    onUpdate
)

watch(
    () => {
      return props.globalCounter
    },
    onUpdate
)

function incrementGlobal () {
  emit('increment-global');
};

function decrementGlobal () {
  emit('decrement-global');
};

function incrementLocal () {
  localCounter.value++;
};

function decrementLocal () {
  localCounter.value--;
};

function onUpdate () {
  updateCounter.value++;
  localMessage.value = localMessage.value.replace(/<li>updated \(\d+\)/g, '') + `<li>updated (${updateCounter.value})`
};

// we don't have a created or onCreated hook any more
// but can do the same just here...
localMessage.value += '<li>created';

onMounted(() => {
  localMessage.value += '<li>mounted'
});

</script>

<template>
  <div class="bg-yellow-100 p-4 mt-4">
    <h1>HelloCounter implemented in "Composition API"</h1>
    <div class="flex items-center">
      <div class="basis-1/5">
        <span class="font-bold">
        GlobalCounter:
        </span>
        ( {{ props.globalCounter }} )
      </div>
      <div class="flex-none">
        <button class="btn-primary" @click="incrementGlobal">+</button>
        <button class="btn-primary" @click="decrementGlobal">-</button>
      </div>
    </div>
    <div class="flex items-center">
      <div class="basis-1/5">
         <span class="font-bold">
        LocalCounter:
        </span>
        ( {{ localCounter }} )
      </div>
      <div class="flex-none">
        <button class="btn-primary" @click="incrementLocal">+</button>
        <button class="btn-primary" @click="decrementLocal">-</button>
      </div>
    </div>
    <div>
      <span class="font-bold">LocalMessage:</span>
      <ul v-html="localMessage"></ul>
    </div>
  </div>
</template>
