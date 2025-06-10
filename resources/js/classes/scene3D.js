import * as THREE from 'three';

export default class ApartmentScene
{
    constructor(canvasId) 
    {
        //  SCENE
        this.scene = new THREE.Scene();

        //  CAMERA
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;

        //  DIRECTIONAL LIGHT
        const color = 0xFFFFFF;
        const intensity = 3;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        this.scene.add(light);

        //  AMBIENT LIGHT
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);
        
        // RENDERER
        this.canvas = document.querySelector('#canvas');
        this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: this.canvas });
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;
        this.renderer.setSize(width, height, false);


        //  MATERIAL
        this.material = new THREE.MeshPhongMaterial({
            color: 0xffff00,
            wireframe: false,
            flatShading: false,
            side: THREE.DoubleSide
        });

        // GEOMETRY
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.cube);

        // Handle window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = canvas.innerWidth / canvas.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(canvas.innerWidth, canvas.innerHeight);
        });

        //  Bind this
        this.render = this.render.bind(this);

        requestAnimationFrame(() => this.render());
    }

    render() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(this.render);
    }

    resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width = Math.floor(canvas.clientWidth * pixelRatio);
        const height = Math.floor(canvas.clientHeight * pixelRatio);

        const needResize = canvas.width !== width || canvas.height !== height;

        if (needResize) {
            console.log(`need resize ${height}, ${width}`);
            renderer.setSize(width, height, false);
        }

        return needResize;
    }

}