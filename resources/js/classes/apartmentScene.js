import * as THREE from 'three';
import Room from '../classes/room.js';

export default class ApartmentScene
{
    constructor(canvasId) 
    {
        this.scene = new THREE.Scene();

        this.camera = null;

        this.initGraphics();

        // create geometry
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        // this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        
        this.material = new THREE.MeshPhongMaterial({
            color: 0xffff00,
            wireframe: false,
            flatShading: false,
            side: THREE.DoubleSide
        });

        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.cube);

        this.camera.position.z = 5;

        this.renderer = null;

        // RENDERER - now runs after component is mounted
        const canvas = document.querySelector('#canvas');
        this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
        this.renderer.setSize(window.innerWidth, window.innerHeight, false);

        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        //  Binds
        this.animate = this.animate.bind(this);
    }

    // ANIMATE
    animate() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animate);
    }

    createLights()
    {
        const color = 0xFFFFFF;
        const intensity = 3;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        this.scene.add(light);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);
    }

    setupCamera()
    {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        // this.camera.position.set(5, 8, 13);
        // this.camera.position.set(-1, 1, 1);
        // this.camera.lookAt(0, 0, 0);

        // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    initGraphics()
    {
        this.createLights();
        this.setupCamera();
    }

}