<template>
    <div ref="mount"></div>
</template>

<script>
import * as THREE from 'three';

export default {
    name: 'ThreeScene',
    mounted() {
        this.initThreeJS();
    },
    methods: {
        initThreeJS() {
            const width = this.$refs.mount.clientWidth;
            const height = this.$refs.mount.clientHeight;

            // Scene
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0xabcdef); // light blue background

            // Camera
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.z = 5;

            // Renderer
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(width, height);
            this.$refs.mount.appendChild(renderer.domElement);

            // Geometry
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            // Animation Loop
            const animate = () => {
                requestAnimationFrame(animate);

                // Rotate the cube
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

                renderer.render(scene, camera);
            };

            animate();
        }
    }
}
</script>

<style>
div {
    width: 100%;
    height: 600px;
    /* You can adjust the size as needed */
}
</style>