

<script setup lang="ts">
import {reactive, ref, nextTick, computed, onUpdated, onMounted, watch} from "vue";

/*
  static data:
*/
const msg = 'Hello!'

/*
  time is wrapped in a mutuable object and automaitcally unwrapped when used in template
*/

// reactive primitive variables with ref(var)
const time = ref(new Date());
const message = ref('');
const showMessages = ref(false);
// reactive objects with reactive(object)
const state = reactive({count: 0});
const sentMessages = reactive<string[]>([]);

/*
  we can call functions directly "on Setup"
*/
setInterval(() => {
  time.value = new Date();
}, 1000);

/*
Lifecycle Hooks
*/

onMounted(() => {
  console.log('onMounted');

})

onUpdated(() => {
  console.log('onUpdated');
})

/*
  props are defined this way:
*/
interface Props {
  uk_time: Date
}

const props = defineProps<Props>();
const emit = defineEmits(['send-message']);

function sendMessage() {
  if (message.value.length) {
    emit('send-message', message.value);
    sentMessages.push(message.value);
    message.value = '';
  }
}

/*
* computed properties
* */
const sentMessagesCount = computed(
    () => {
      return sentMessages.length
    }
)

/*
* difference between computed and method
* copmuted will be cached and updated only if value changes.
* method will be called on each tick.
* */

const nowComputed = computed(() => new Date().toString());
const nowByMethod = function () {
  return new Date().toString();
};

/*
* watch( source, callback )
* */

watch(() => props.uk_time, (newVal, oldVal) => {
  console.log('watch uktime', newVal, oldVal);
})


nextTick(() => {
  // executed after once after next view update cycle
  console.log('tick');
})

</script>


<template>
  <div class="bg-purple-100 p-4">
    <h1>Show syntax and features of a "Composition API" component"</h1>
    <div>Static: {{ msg }}</div>
    <div>Reactive: {{ time }}</div>
    <div>UK Time: {{ props.uk_time }}</div>
    <div>state.count: {{ state.count }}
      <button class="btn-primary" @click="state.count++">count++</button>
    </div>
    <div class="mt-4">
      <input class="mr-4" type="text" v-model="message" placeholder="your message">
      <button class="btn-primary" @click="sendMessage">Send a Message</button>
      <span>Sent messages count: {{ sentMessagesCount }}</span>
      <button class="btn-primary" @click="showMessages=!showMessages">
        {{ showMessages ? 'Hide' : 'Show all messages' }}
      </button>
    </div>
    <ol v-if="showMessages">
      <li v-for="message in sentMessages">{{ message }}</li>
    </ol>

    <div class="mt-4">
      <div>nowComputed will be cached, no update: {{ nowComputed }}</div>
      <div>nowByMethod updates on every tick: {{ nowByMethod() }}</div>
    </div>
  </div>
</template>


<style scoped>

</style>