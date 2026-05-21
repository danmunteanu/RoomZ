<script setup>
import { ref, onMounted } from 'vue';
import Scene3D from '../classes/scene3D.js';

let scene3D = null;

onMounted(() => {
  scene3D = new Scene3D("#canvas");
        
  // Handle window resize
  window.addEventListener('resize', () => {
      scene3D.renderer.setSize(scene3D.canvas.clientWidth, scene3D.canvas.clientHeight, false);
      scene3D.camera.aspect = scene3D.canvas.clientWidth / scene3D.canvas.clientHeight;
      scene3D.camera.updateProjectionMatrix();
  });
});
</script>

<template>
	<canvas id="canvas"></canvas>
</template>
