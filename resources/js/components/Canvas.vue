<script setup>
import { ref, onMounted } from 'vue';
import Scene3D from '../classes/scene3D.js';

let scene3D = null;

onMounted(() => {
  scene3D = new Scene3D("#canvas");
        
  // Handle window resize
  window.addEventListener('resize', () => {
    if (resizeRendererToDisplaySize(scene3D.renderer)) {
      // console.log('needs resize');
      const canvas = scene3D.renderer.domElement;
      scene3D.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      scene3D.camera.updateProjectionMatrix();
    } else {
      //  does not need resize
    }
  });
});

function resizeRendererToDisplaySize(renderer) {
  const canvas = scene3D.renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
</script>

<template>
	<canvas id="canvas"></canvas>
</template>

<style scoped>
#canvas {
  /* width: 100%; */
  /* height: 100%; */
  display: block;

  width: 50vw;
  height: 100vh;

  /* margin-right: 15px; */
  /* margin-top: 15px; */
  /* margin-bottom: 15px; */
}
</style>
