import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import "./style.css";

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0xffffff });
const cube = new Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

renderer.setAnimationLoop(() => {
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;

  camera.position.z += 0.05;

  renderer.render(scene, camera);
});
