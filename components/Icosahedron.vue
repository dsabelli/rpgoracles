<template>
  <div class="" ref="rendererRef"></div>
</template>

<script setup lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const rendererRef = ref();

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const light = new THREE.HemisphereLight(0xffffff, 0x000000, 5);

  scene.add(light);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(300, 300);
  renderer.setClearColor(0xffffff, 0);
  rendererRef.value.appendChild(renderer.domElement);
  camera.position.set(0, 0, 250);

  const loader = new GLTFLoader();
  loader.load("/d20(1).glb", (gltf) => {
    scene.add(gltf.scene);
    const animate = function () {
      requestAnimationFrame(animate);
      gltf.scene.rotation.x += window.innerWidth > 768 ? 0.005 : 0.01;
      gltf.scene.rotation.y += window.innerWidth > 768 ? 0.005 : 0.01;
      renderer.render(scene, camera);
    };
    animate();
  });
});
</script>

<style scoped></style>
