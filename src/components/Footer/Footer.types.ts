import * as THREE from 'three';

export type FooterGLTFNodes = {
  footerBg: THREE.Mesh;
  peach: THREE.Mesh;
  leaf: THREE.Mesh;
  leafBase: THREE.Mesh;
  footerBoxTop: THREE.Mesh;
  footerBoxGlass: THREE.Mesh;
  footerBoxBase: THREE.Mesh;
  handIcon: THREE.Mesh;
  footerBoxLeg: THREE.Mesh;
  bananaSkin: THREE.Mesh;
  bananaInner: THREE.Mesh;
  moon: THREE.Mesh;
  screen: THREE.Mesh;
};

export type FooterGLTFResult = {
  nodes: FooterGLTFNodes;
};
