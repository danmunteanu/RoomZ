<script setup>
import { ref, onMounted } from 'vue'
import Canvas from './components/Canvas.vue';
import Editors from './components/Editors.vue';

</script>

<template>
  <div class="grid grid-cols-2 mx-40">
      <Editors />
      <Canvas/>
  </div>
</template>

<style scoped>
/* Add custom styles here */
</style>
