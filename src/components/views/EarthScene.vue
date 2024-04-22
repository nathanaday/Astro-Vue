<template>
    <div ref="mount"></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from '@three-ts/orbit-controls';

export default {
    name: 'EarthScene',
    mounted() {
        this.initThreeJS();
    },
    methods: {
        initThreeJS() {
            const width = this.$refs.mount.clientWidth;
            const height = this.$refs.mount.clientHeight;

            // Scene
            const scene = new THREE.Scene();

            // Camera
            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
            camera.position.set(5, 5, 10);  // Position the camera

            // Renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(width, height);
            this.$refs.mount.appendChild(renderer.domElement);
            
            const earthGroup = new THREE.Group();
            // earthGroup.rotation.z = -23.4 * Math.PI / 180;  // If you want to add axis tilt
            scene.add(earthGroup);

            // Texture loader
            const loader = new THREE.TextureLoader();

            // Earth Sphere
            const earthGeometry = new THREE.IcosahedronGeometry(2, 12);
            // const earthMaterial = new THREE.MeshStandardMaterial({ 
            //     map: loader.load("./public/earthmap1k.jpg"), 
            //     flatShading: true });
            const earthMaterial = new THREE.MeshStandardMaterial({
                map: loader.load("./public/8k_earth_daymap.jpg"),
                // flatShading: true
            });
            const earth = new THREE.Mesh(earthGeometry, earthMaterial);
            earthGroup.add(earth);

            const lightsMat = new THREE.MeshBasicMaterial({
                map: loader.load("./public/8k_earth_nightmap.jpg"),
                blending: THREE.AdditiveBlending,
            })
            const lightMesh = new THREE.Mesh(earthGeometry, lightsMat);
            earthGroup.add(lightMesh);


            // Satellite Sphere
            const satelliteGeometry = new THREE.SphereGeometry(0.05, 16, 16);
            const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
            satellite.position.set(2.4, 0, 0);  // Position the satellite
            earthGroup.add(satellite);

            // Lights
            // const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
            // scene.add(ambientLight);

            const sunlight = new THREE.DirectionalLight(0xffffff, 1);
            sunlight.position.set(3, 0, 0);
            scene.add(sunlight);

            // Orbit Controls
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.update();

            const axesHelper = new THREE.AxesHelper(5); // The parameter defines the size of the axes.
            scene.add(axesHelper);

            // Animation Loop
            const animate = () => {
                requestAnimationFrame(animate);
                
                // // To rotate the earth + sat group;
                // earthGroup.rotation.y += 0.001;

                // Required if controls.enableDamping or controls.autoRotate are set to true
                controls.update();

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
    height: 400px;
    /* Adjust the size as needed */
}
</style>