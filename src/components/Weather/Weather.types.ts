import * as THREE from 'three';

export type WeatherGLTFNodes = {
  weatherCloud1: THREE.Mesh;
  weatherCloud2: THREE.Mesh;
  weatherCloud3: THREE.Mesh;
  weatherCloud4: THREE.Mesh;
  weatherCloud5: THREE.Mesh;
  weatherCloud6: THREE.Mesh;
  weatherCloud7: THREE.Mesh;
  weatherMoon: THREE.Mesh;
  weatherBG: THREE.Mesh;
  weatherValItem1: THREE.Mesh;
  weatherValItem2: THREE.Mesh;
  weatherCity: THREE.Mesh;
  weatherDesc: THREE.Mesh;
  weatherTitle: THREE.Mesh;
};

export type WeatherGLTFResult = {
  nodes: WeatherGLTFNodes;
};
