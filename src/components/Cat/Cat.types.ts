import * as THREE from 'three';
export type CatGLTFNodes = {
  hand1: THREE.Mesh;
  catEye: THREE.Mesh;
  stripe1: THREE.Mesh;
  catMouthBlack: THREE.Mesh;
  catEar: THREE.Mesh;
  catBody: THREE.Mesh;
  teeth: THREE.Mesh;
  catMouthRed: THREE.Mesh;
};

export type CatGLTFResult = {
  nodes: CatGLTFNodes;
};
