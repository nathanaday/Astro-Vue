<template>
  <div class="my-4">
    <earth-scene></earth-scene>
  </div>
</template>

<script>
import Knob from 'primevue/knob';
import EarthScene from './views/EarthScene.vue';

export default {
  name: 'HelloWorld',
  components: {
    Knob,
    EarthScene
  },
  data() {
    return {
      message: 'Hello from Vue!',
      counter: 0
    };
  },
  computed: {
    computedMessage() {
      return this.message + ' The counter is ' + (this.counter > 0 ? this.counter : 'not incremented yet.');
    }
  },
  methods: {
    incrementCounter() {
      this.counter++;
    }
  },
  mounted() {
    console.log('Component is mounted!');
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
