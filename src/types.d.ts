import { ReactNode } from 'react';

export {};

declare global {
  export interface ObjectI {
    position: THREE.Vector3;
    rotation?: THREE.Euler;
    scale?: number | THREE.Vector3;
  }

  export interface ObjectPos extends Pick<ObjectI, 'position'> {
    children?: ReactNode;
  }

  export type MaterialI = THREE.Material | THREE.Material[] | undefined;

  export type GeoMaterial = {
    geometry: THREE.BufferGeometry;
    material: MaterialI;
  };
}
