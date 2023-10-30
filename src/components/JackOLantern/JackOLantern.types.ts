import * as THREE from 'three';

export type JackOLanternGLTFNodes = {
  sphere: THREE.Mesh;
  star: THREE.Mesh;
  jackBody: THREE.Mesh;
};

export type JackOLanternGLTFResult = {
  nodes: JackOLanternGLTFNodes;
};
