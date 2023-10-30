import * as THREE from 'three';

export type IphoneGLTFNodes = {
  screen: THREE.Mesh;
  backScreen: THREE.Mesh;
  border: THREE.Mesh;
};

export type IphoneGLTFResult = {
  nodes: IphoneGLTFNodes;
};
