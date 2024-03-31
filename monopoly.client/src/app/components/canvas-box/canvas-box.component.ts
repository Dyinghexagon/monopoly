import { Component, OnInit } from "@angular/core";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

@Component({
    selector: "app-canvas-box",
    templateUrl: "./canvas-box.component.html",
    styleUrls: [ "./canvas-box.component.scss" ]
})
export class CanvasBoxComponent implements OnInit {

    private _canvas: HTMLCanvasElement | null = null;
    private _renderer: THREE.WebGLRenderer | null = null;
    private _camera: THREE.PerspectiveCamera | null = null;
    private _scene: THREE.Scene | null = null;
    private _controls: OrbitControls | null = null;

    public ngOnInit(): void {
        this._canvas = document.querySelector<HTMLCanvasElement>("#canvas-box");
        if (!this._canvas) {
            return;
        }

        const fov = 45;
        const aspect = 2;
        const near = 0.1;
        const far = 100;

        this._renderer = new THREE.WebGLRenderer( { antialias: true, canvas: this._canvas } );
        this._camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
        this._camera.position.set( 0, 10, 20 );

        this._controls = new OrbitControls(this._camera, this._canvas);
        this._controls.target.set(0, 5, 0);
        this._controls.update();

        this._scene = new THREE.Scene();
        this._scene.background = new THREE.Color("black");

        const group = new THREE.Group();
        group.add(this.createPlane());
        group.add(this.createCube());
        group.add(this.createSphere());

        this._scene.add(group);

        const light = this.createLight();
        this._scene.add(light);
        this._scene.add(light.target);

        this.render();
        this.initEventListner(group);
    }

    private createPlane(): THREE.Mesh {
        const planeSize = 40;
        const loader = new THREE.TextureLoader();
        const texture = loader.load("https://threejs.org/manual/examples/resources/images/checker.png");
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.magFilter = THREE.NearestFilter;
        texture.colorSpace = THREE.SRGBColorSpace;
        const repeats = planeSize / 2;
        texture.repeat.set( repeats, repeats );

        const planeGeo = new THREE.PlaneGeometry( planeSize, planeSize );
        const planeMat = new THREE.MeshPhongMaterial( {
            map: texture,
            side: THREE.DoubleSide,
        } );
        const mesh = new THREE.Mesh( planeGeo, planeMat );
        mesh.rotation.x = Math.PI * - .5;
        return mesh;
    }

    private createCube(): THREE.Mesh {
        const cubeSize = 4;
        const cubeGeo = new THREE.BoxGeometry( cubeSize, cubeSize, cubeSize );
        const cubeMat = new THREE.MeshPhongMaterial( { color: "#8AC" } );
        const mesh = new THREE.Mesh( cubeGeo, cubeMat );
        mesh.position.set( cubeSize + 1, cubeSize / 2, 0 );
        return mesh;
    }

    private createSphere(): THREE.Mesh {
        const sphereRadius = 3;
        const sphereWidthDivisions = 32;
        const sphereHeightDivisions = 16;
        const sphereGeo = new THREE.SphereGeometry( sphereRadius, sphereWidthDivisions, sphereHeightDivisions );
        const sphereMat = new THREE.MeshPhongMaterial( { color: "#CA8" } );
        const mesh = new THREE.Mesh( sphereGeo, sphereMat );
        mesh.position.set( - sphereRadius - 1, sphereRadius + 2, 0 );
        return mesh;
    }

    private createLight(): THREE.DirectionalLight {
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight( color, intensity );
        light.position.set( 0, 10, 0 );
        light.target.position.set( - 5, 0, 0 );
        return light;
    }

    private render(): void {
        const tick = (): void => {
            if (!this?._renderer || !this._camera || !this._scene || !this._controls) {
                return;
            }

            if (this.resizeRendererToDisplaySize() && this._canvas) {
                this._camera.aspect = this._canvas.clientWidth / this._canvas.clientHeight;
                this._camera.updateProjectionMatrix();
            }

            this._controls.update();
            this._renderer.render(this._scene, this._camera);
            window.requestAnimationFrame(this.render);
        };
        tick();
    }

    private resizeRendererToDisplaySize(): boolean {
        const width = this._canvas?.clientWidth ?? 0;
        const height = this._canvas?.clientHeight ?? 0;
        const needResize = this._canvas?.width !== width || this._canvas?.height !== height;
        if (needResize) {
            this._renderer?.setSize(width, height, false);
        }

        return needResize;
    }

    private initEventListner(group: THREE.Group): void {
        window.addEventListener("click", (event: MouseEvent) => this.HandleClick(event, group));

        window.addEventListener("resize", () => {
            if (!this?._renderer || !this._camera || !this._scene || !this._controls) {
                return;
            }

            // Обновляем размеры
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Обновляем соотношение сторон камеры
            this._camera.aspect = width / height;
            this._camera.updateProjectionMatrix();

            // Обновляем renderer
            this._renderer.setSize(width, height);
            this._renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this._renderer.render(this._scene, this._camera);
        });

        window.addEventListener("dblclick", () => {
            if (!document.fullscreenElement) {
                this._canvas?.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        });
    }

    private HandleClick(event: MouseEvent, group: THREE.Group): void {
        if (!this._camera) {
            return;
        }

        const pointer = new THREE.Vector2();
        pointer.x = (event.clientX / window.innerHeight) * 2 - 1;
        pointer.y = -(event.clientY / window.innerWidth) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(pointer, this._camera);
        raycaster.intersectObjects(group.children).forEach(intersection => {
            const object = intersection.object as THREE.Mesh;
            const material = new THREE.MeshPhongMaterial();
            material.color.setHSL(0, 1, .5);
            material.flatShading = true;
            object.material = material;
        });
    }

}