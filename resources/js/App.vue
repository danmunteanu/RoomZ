<script setup>
import { ref, onMounted } from 'vue'
import Canvas from './components/Canvas.vue';
import Editors from './components/Editors.vue';

</script>

<template>
  <div class="grid grid-cols-2 mx-40 mt-15">
      <Editors />
      <Canvas />
  </div>
</template>

<style scoped>
#canvas {
  width: 100%;
  width: 100%;
  min-height: 480px;
  display: block;
}
</style>
