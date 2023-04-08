<template>
  <div class="" ref="rendererRef"></div>
</template>

<script setup lang="ts">
import * as THREE from "three";

const rendererRef = ref();

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const geometry = new THREE.IcosahedronGeometry(2, 0);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });

  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(300, 300);
  renderer.setClearColor(0xffffff, 0);
  rendererRef.value.appendChild(renderer.domElement);
  camera.position.z = 4;

  const animate = () => {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;

    renderer.render(scene, camera);
  };

  animate();
});
</script>

<style scoped></style>
