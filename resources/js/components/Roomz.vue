<script setup>
import { ref, onMounted } from 'vue'

import ApartmentScene from '../classes/apartmentScene.js';

let aptScene = null;

onMounted(() => {
  aptScene = new ApartmentScene("canvas");
  aptScene.animate();
});
</script>

<template>
    <canvas id="canvas"></canvas>
</template>

<style scoped>
#canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>