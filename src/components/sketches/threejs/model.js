import * as THREE from "three";
import { Box2 } from "three";

let scale = 1.5;

let camera;
let scene;
let renderer;
let model;

let bgColor;
let fogColor;

const clock = new THREE.Clock();
let matrix = new THREE.Matrix4();

const init = () => {
  //AXES
  //scene.add(new THREE.AxesHelper(1000));

  //CAMERA
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / scale / (window.innerHeight / scale),
    1,
    10000
  );
  camera.position.set(0, 0, -3);
  camera.lookAt(0, 0, 0);

  bgColor = new THREE.Color(0x00000000);
  fogColor = bgColor;

  //BACKGROUND COLOR
  renderer.setClearColor(bgColor, 0); // the default

  //FOG
  scene.fog = new THREE.FogExp2(fogColor, 0.002);

  //LIGHTS
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(-3, 10, -10);
  dirLight.castShadow = true;
  dirLight.shadow.camera.top = 2;
  dirLight.shadow.camera.bottom = -2;
  dirLight.shadow.camera.left = -2;
  dirLight.shadow.camera.right = 2;
  dirLight.shadow.camera.near = 0.1;
  dirLight.shadow.camera.far = 40;
  scene.add(dirLight);

  //3D OBJECT
  const modelGeometry = new THREE.BoxGeometry(1, 1, 1);
  const modelMaterial = new THREE.MeshPhongMaterial({
    color: 0x999999,
    depthWrite: false,
  });
  model = new THREE.Mesh(modelGeometry, modelMaterial);
  model.receiveShadow = true;
  scene.add(model);

  //RENDERER
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.setSize(window.innerWidth / scale, window.innerHeight / scale);
};

const animate = () => {
  requestAnimationFrame(animate);
  //matrix.makeRotationY((clock.getDelta() * 2 * Math.PI) / 60);
  //camera.position.applyMatrix4(matrix);
  model.rotation.x += 0.0025;
  model.rotation.y += 0.005;
  renderer.render(scene, camera);
};

const resize = () => {
  renderer.setSize(window.innerWidth / scale, window.innerHeight / scale);
  camera.aspect = window.innerWidth / scale / window.innerHeight / scale;
};

export const createScene = (el) => {
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: el,
    alpha: true,
  });

  init();
  resize();
  animate();
};

window.addEventListener("resize", resize);

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};
