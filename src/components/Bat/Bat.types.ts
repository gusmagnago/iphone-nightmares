import * as THREE from 'three';

export type BatGLTFNodes = {
  batWing: THREE.Mesh;
  teeth: THREE.Mesh;
  batMouth: THREE.Mesh;
  batEar: THREE.Mesh;
  batEye: THREE.Mesh;
  batBody: THREE.Mesh;
};

export type BatLTFResult = {
  nodes: BatGLTFNodes;
};
