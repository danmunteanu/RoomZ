<script setup>
import { ref, onMounted } from 'vue'

import Scene3D from '../classes/scene3D.js';
import Apartment from '../classes/apartment.js';
import Room from '../classes/room.js';

let apartment = ref(null);

let cube = ref(null);

let scene3D = null;

onMounted(() => {
  apartment.value = new Apartment();
  cube.value = new Room();
  scene3D = new Scene3D("canvas");
        
  // Handle window resize
  window.addEventListener('resize', () => {
      scene3D.renderer.setSize(scene3D.canvas.clientWidth, scene3D.canvas.clientHeight, false);
      scene3D.camera.aspect = scene3D.canvas.clientWidth / scene3D.canvas.clientHeight;
      scene3D.camera.updateProjectionMatrix();
  });
});
</script>

<template>
  <div class="grid grid-cols-4 mx-40 mt-15">
    <div>
      EDITORS BE HERE
    </div>
    <div class="col-span-3">
      <canvas id="canvas"></canvas>
    </div>
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