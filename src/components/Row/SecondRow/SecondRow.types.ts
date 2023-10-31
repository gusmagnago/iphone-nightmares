import { MoustacheNodes } from '../../Doll/Doll.types';
import { JackOLanternGLTFNodes } from '../../JackOLantern/JackOLantern.types';

export type SecondRowGLTFNodes = CameraGLTFNodes | FindMyGLTFNodes | ContactsGLTFNodes | ClockGLTFNodes;

export type SecondRowGLTFResult = {
  nodes: SecondRowGLTFNodes;
};

export type CameraGLTFNodes = {
  cameraTitle: THREE.Mesh;
  cameraCandle: THREE.Mesh;
  cameraCandleFlame: THREE.Mesh;
  cameraCandleCandle: THREE.Mesh;
  cameraTableLeg: THREE.Mesh;
  cameraTableLeg1: THREE.Mesh;
  cameraTableLeg2: THREE.Mesh;
  cameraTableLeg3: THREE.Mesh;
  cameraTableCrystal: THREE.Mesh;
  cameraCrystalHolder: THREE.Mesh;
  cameraTableShape: THREE.Mesh;
  floor: THREE.Mesh;
};

export type CameraGLTFResult = {
  nodes: CameraGLTFNodes;
};

export type FindMyGLTFNodes = {
  findMyTitle: THREE.Mesh;
  LighthouseBodyTop: THREE.Mesh;
  LighthouseLigthMaterial: THREE.PointLight;
  LighthouseStar: THREE.Mesh;
  LighthouseLeg: THREE.Mesh;
  LighthouseGlass: THREE.Mesh;
  LighthouseBodyPartWhite: THREE.Mesh;
  LighthouseBodyPartRed: THREE.Mesh;
  LighthouseBase: THREE.Mesh;
  floor: THREE.Mesh;
};

export type FindMyGLTFResult = {
  nodes: FindMyGLTFNodes;
};

export type ContactsGLTFNodes = {
  contactsTitle: THREE.Mesh;
  bookComCircle: GeoMaterial;
  bookComCStar: GeoMaterial;
  bookComBodySide: GeoMaterial;
  bookComBodyBar: GeoMaterial;
  bookComBodyBack: GeoMaterial;
  bookComBodyFront: GeoMaterial;
  floor: THREE.Mesh;
};

export type ContactsGLTFResult = {
  nodes: ContactsGLTFNodes;
};


export type ClockGLTFNodes = {
  bookComBodyBar: THREE.Mesh;
  clockTitle: THREE.Mesh;
  clockJailLetter: THREE.Mesh;
  clockJailText: THREE.Mesh;
  clockJailLetter1: THREE.Mesh;
  clockJailTriangle: THREE.Mesh;
  clockBase: THREE.Mesh;
  clockJailBase: THREE.Mesh;
  clockDollBody:THREE.Mesh;
  floor: THREE.Mesh;
} & MoustacheNodes & JackOLanternGLTFNodes;

export type ClockGLTFResult = {
  nodes: ClockGLTFNodes;
};