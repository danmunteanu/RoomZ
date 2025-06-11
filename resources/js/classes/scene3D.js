import * as THREE from 'three';

export default class Scene3D
{
    constructor(canvasId) 
    {
        //  GET CANVAS
        this.canvas = document.querySelector(canvasId);
        if (this.canvas === null)
        {
            console.error("Scene3D: No canvas provided in constructor");
            return;
        }

        //  SCENE
        this.scene = new THREE.Scene();

        //  CAMERA
        // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // this.camera.position.z = 5;
        this.setupCamera(); 

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

        this.createPlane();
        this.createGridHelper();

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

    render_old() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(this.render);
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.set(5, 8, 13);
        this.camera.position.set(-2, 2, 2);
        this.camera.lookAt(0, 0, 0);
    }

    createPlane() {
        const mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(150, 150),
            new THREE.MeshPhongMaterial({ color: 0xcbcbcb, depthWrite: false })
        );
        mesh.name = 'Plane';
        mesh.rotation.x = -Math.PI / 2;
        mesh.receiveShadow = true;
        this.scene.add(mesh);
    }

    createGridHelper() {
        const gridSize = 10;
        const divisions = 10;
        const gridHelper = new THREE.GridHelper(gridSize, divisions);
        const gridMaterial = new THREE.MeshBasicMaterial({
            color: 0x808080,
            wireframe: false,
            transparent: false,
            opacity: 1
        });
        gridHelper.material = gridMaterial;
        this.scene.add(gridHelper);
    }

    render() {
        if (this.resizeRendererToDisplaySize(this.renderer)) {
            const canvas = this.renderer.domElement;
            this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this.camera.updateProjectionMatrix();
        }

        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(() => this.render());
    }

    resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        
        const pixelRatio = window.devicePixelRatio;
        
        const clientWidth = canvas.clientWidth;
        const clientHeight = canvas.clientHeight;

        const width = Math.floor(canvas.clientWidth * pixelRatio);
        const height = Math.floor(canvas.clientHeight * pixelRatio);

        const needResize = canvas.width !== width || canvas.height !== height;
        
        if (needResize) {
            console.log({canvas, pixelRatio, width, height, clientWidth, clientHeight});
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

}