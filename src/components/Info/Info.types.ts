import * as THREE from 'three';


export type InfoGLTFNodes = {
  circle1: THREE.Mesh;
  seringeBack: THREE.Mesh;
  seringeBodyTop: THREE.Mesh;
  seringeBodyBottom: THREE.Mesh;
  blood: THREE.Mesh;
  seringeBodyTube: THREE.Mesh;
  seringeBody: THREE.Mesh;
  hour: THREE.Mesh;
  coffin: THREE.Mesh;
};

export type InfoGLTFResult = {
  nodes: InfoGLTFNodes;
};
