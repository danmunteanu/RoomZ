<script setup>
import { ref, onMounted } from 'vue'

import Scene3D from '../classes/scene3D.js';
import Apartment from '../classes/apartment.js';

let apartment = ref(null);

let scene3D = null;

onMounted(() => {
  apartment = new Apartment();
  scene3D = new Scene3D("canvas");
});
</script>

<template>
    <div class="mb-3 mt-3">
        <canvas id="canvas"></canvas>
    </div>
</template>

<style scoped>

#canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>