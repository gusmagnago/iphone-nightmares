export type DollGLTFNodes = {
  grindrDollMouth: THREE.Mesh;
  grindrDollEye: THREE.Mesh;
  grindrDollBg: THREE.Mesh;
  grindrDollBody: THREE.Mesh;
  grindrDollChest: THREE.Mesh;
  grindrDollBelly: THREE.Mesh;
  grindrDollTit: THREE.Mesh;
  dollChestTit: THREE.Mesh;
  grindrDollLegItem: THREE.Mesh;
  grindrDollLegItem1: THREE.Mesh;
  grindrDollShoeLeg: THREE.Mesh;
  grindrDollShoeBack: THREE.Mesh;
  grindrDollShoeFront: THREE.Mesh;
};

export type DollProps = {
  nodes: DollGLTFNodes;
  position: number[];
  rotation?: number[];
} & DollCostume;

export type DollCostume =
  | {
      hasCostume?: true;
      dollMakeUp: {
        lipstick: MaterialI;
        makeUp: MoustacheProps[];
      };
      dollClothingMaterial: MaterialI;
    }
  | {
      hasCostume?: false;
      dollMakeUp?: never;
      dollClothingMaterial?: never;
    };

export type MoustacheNodes = {
  clockDollMoustache: THREE.Mesh;
  clockDollMoustache1: THREE.Mesh;
  clockDollMoustache2: THREE.Mesh;
};
export type MoustacheProps = {
  nodes: MoustacheNodes;
  material: MaterialI;
  position: number[];
  rotation: number[];
};
