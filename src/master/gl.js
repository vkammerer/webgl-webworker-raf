import * as THREE from "three";

const scene = new THREE.Scene();
const ratio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.set(0, 0, 5);
camera.lookAt(new THREE.Vector3(0, 0, 0));
renderer.render(scene, camera);

export const updateSceneRotation = rotation => {
  cube.rotation.x = rotation.x;
  cube.rotation.y = rotation.y;
  renderer.render(scene, camera);
};
