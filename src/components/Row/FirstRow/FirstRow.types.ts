import { GLTF } from 'three-stdlib';

export type FirstRowGLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>;
};

export type GrindrGLTFNodes = {
  floor: THREE.Mesh;
  grindrTitle: THREE.Mesh;
  grindrMaskIron: THREE.Mesh;
  grindrMaskRed: THREE.Mesh;
  grindrMaskEye: THREE.Mesh;
  grindrMaskShape: THREE.Mesh;
  grindrDollMouth: THREE.Mesh;
  grindrDollEye: THREE.Mesh;
  grindrDollBg: THREE.Mesh;
  grindrDollBody: THREE.Mesh;
  grindrDollChest: THREE.Mesh;
  grindrDollTit: THREE.Mesh;
  dollChestTit: THREE.Mesh;
  grindrDollShoeLeg: THREE.Mesh;
  grindrDollShoeBack: THREE.Mesh;
  grindrDollShoeFront: THREE.Mesh;
  grindrDollLegItem: THREE.Mesh;
  grindrDollLegItem1: THREE.Mesh;
  grindrDollBelly: THREE.Mesh;
};

export type GrindrGLTFResult = {
  nodes: GrindrGLTFNodes;
};

export type XGLTFNodes = {
  floor: THREE.Mesh;
  xBottleTitle: THREE.Mesh;
  xBottleTopLetters: THREE.Mesh;
  xBottleTop: THREE.Mesh;
  xBottleTopBase: THREE.Mesh;
  xBottleBody: THREE.Mesh;
  xBottleLettersItem: THREE.Mesh;
  xBottleX: THREE.Mesh;
  xBottleXInner: THREE.Mesh;
  xBottleSkullHead: THREE.Mesh;
  xBottleSkullJaw: THREE.Mesh;
  xBottleSkullTeethUp: THREE.Mesh;
  xBottleSkullTeethDown: THREE.Mesh;
  xBottleTagItemLogo: THREE.Mesh;
  xBottleTagBg: THREE.Mesh;
};

export type XGLTFResult = {
  nodes: XGLTFNodes;
};

export type SoundCloudGLTFNodes = {
  floor: THREE.Mesh;
  soundCloudLightining: THREE.Mesh;
  soundCloudLightining1: THREE.Mesh;
  soundCloudCloud: THREE.Mesh;
  soundCloudCloud1: THREE.Mesh;
  soundCloudCloud2: THREE.Mesh;
  soundCloudCloud3: THREE.Mesh;
  soundCloudCloud4: THREE.Mesh;
  soundCloudCloud5: THREE.Mesh;
  soundCloudCloud6: THREE.Mesh;
  soundCloudCloud7: THREE.Mesh;
  soundCloudCloud8: THREE.Mesh;
  soundCloudCloud9: THREE.Mesh;
  soundCloudCloud10: THREE.Mesh;
  soundCloudCloud11: THREE.Mesh;
  soundCloudCloud12: THREE.Mesh;
  soundCloudCloud13: THREE.Mesh;
  soundCloudCloud14: THREE.Mesh;
  soundCloudCloud15: THREE.Mesh;
  Sphere: THREE.Mesh;
  SoundCloudBg: THREE.Mesh;
  SoundCloudTitle: THREE.Mesh;
};

export type SoundCloudGLTFResult = {
  nodes: SoundCloudGLTFNodes;
};


export type HealthGLTFNodes = {
  healthTitle: THREE.Mesh;
  healthBlood: THREE.Mesh;
  healthBloodScary: THREE.Mesh;
  healthKnifeBody: THREE.Mesh;
  healthKnifeHolder: THREE.Mesh;
  healthHeart: THREE.Mesh;
  healthBG: THREE.Mesh;
};

export type HealthGLTFResult = {
  nodes: HealthGLTFNodes;
};