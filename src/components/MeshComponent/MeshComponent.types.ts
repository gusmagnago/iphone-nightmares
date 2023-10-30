import { ReactNode } from 'react';

export type MeshCompProps = {
  name?: string;
  meshPosition?: number[];
  meshRotation?: number[] | THREE.Euler | undefined;
  meshScale?: number[] | number;
  children?: ReactNode;
  materialType?: MeshMaterialType;
  variant?: MeshMaterialVariant;
  glassThickness?: number;
} & GeoMaterial;

export type MeshMaterialType =
  | 'metallic'
  | 'glass'
  | 'glossy'
  | 'plastic'
  | 'shiny';

export type MeshMaterialVariant =
  | 'greenMold'
  | 'black'
  | 'gray'
  | 'brown'
  | 'brownLight'
  | 'redBloody'
  | 'redBloodstain'
  | 'white'
  | 'orangePumpkins'
  | 'grayLight'
  | 'greenEw'
  | 'yellow'
  | 'glass'
  | 'blackLight'
  | 'purple' | 'ambar' | 'light';
