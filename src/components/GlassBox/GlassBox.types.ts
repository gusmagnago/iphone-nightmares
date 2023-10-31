import * as THREE from 'three';
import { ReactNode } from 'react';

export type GlassBoxProps = {
  geometries: {
    footerBoxTop: THREE.BufferGeometry;
    footerBoxGlass: THREE.BufferGeometry;
    footerBoxLeg: THREE.BufferGeometry;
    footerBoxBase: THREE.BufferGeometry;
  };
  materials: {
    footerBoxTop: MaterialI;
    footerBoxGlass: MaterialI;
    footerBoxLeg: MaterialI;
    footerBoxBase: MaterialI;
  };
  position: number[];
  children: ReactNode;
};
